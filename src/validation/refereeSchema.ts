import * as yup from "yup";
import { parse, isValid, isBefore } from "date-fns";

const dateFormat = "yyyy-MM-dd";

export const refereeSchema = yup.object({
  relationship: yup
    .string()
    .required("Relationship is required")
    .min(5, "Relationship must be at least 5 characters")
    .max(30, "Relationship must not exceed 30 characters"),

  startDate: yup
    .string()
    .required("Start date is required")
    .test("is-valid-date", "Start date must be a valid date", (value) => {
      if (!value) return false;
      const parsed = parse(value, dateFormat, new Date());
      return isValid(parsed);
    }),

  endDate: yup
    .string()
    .required("End date is required")
    .test("is-valid-date", "End date must be a valid date", (value) => {
      if (!value) return false;
      const parsed = parse(value, dateFormat, new Date());
      return isValid(parsed);
    })
    .test(
      "not-before-start",
      "End date cannot be before start date",
      function (value) {
        const { startDate } = this.parent;
        if (!value || !startDate) return false;
        const parsedStart = parse(startDate, dateFormat, new Date());
        const parsedEnd = parse(value, dateFormat, new Date());
        return (
          isValid(parsedStart) &&
          isValid(parsedEnd) &&
          !isBefore(parsedEnd, parsedStart)
        );
      }
    ),

  reasonForLeaving: yup
    .string()
    .required("Reason for leaving is required")
    .min(5, "Reason must be at least 5 characters")
    .max(60, "Reason must not exceed 60 characters"),

  positionHeld: yup
    .string()
    .required("Position held is required")
    .min(5, "Position must be at least 5 characters")
    .max(100, "Position must not exceed 100 characters"),

  salary: yup
    .number()
    .typeError("Salary must be a number")
    .required("Salary is required")
    .min(0, "Salary cannot be negative"),

  performance: yup
    .string()
    .required("Performance rating is required")
    .max(100, "Performance details must not exceed 100 characters"),

  conduct: yup
    .string()
    .required("Conduct is required")
    .max(100, "Conduct details must not exceed 100 characters"),

  integrity: yup
    .string()
    .required("Integrity information is required")
    .max(100, "Integrity details must not exceed 100 characters"),

  additionalComments: yup
    .string()
    .optional()
    .max(200, "Comments must not exceed 200 characters"),

  reEmploy: yup.object({
    label: yup.string().required("Re-employment decision is required"),
    value: yup.string().required("Re-employment decision is required"),
  }),
});
