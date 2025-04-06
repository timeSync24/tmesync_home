/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import { yupResolver } from "@hookform/resolvers/yup";
import { refereeSchema } from "../validation/refereeSchema";
import Input from "../component/Forms/Input";
import DateInput from "../component/Forms/DateInput";
import { BaseButton } from "../component/Forms/button";
import Header from "../component/Header";
import uploadImage from "../helpers/generateCloudUrl";
import { useAddRefereeQuery } from "../hooks/ref";
import Select from "../component/Forms/Select";
import { useNavigate } from "react-router-dom";

const ReferenceForm = () => {
  const nav = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addForm = useAddRefereeQuery();
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedImage(file);
  };
  const token: string =
    new URLSearchParams(window.location.search).get("token") || "";

  const onSubmit: SubmitHandler<any> = async (data) => {
    if (!token) {
      return;
    } else {
      setIsSubmitting(true);

      try {
        let uploadedUrl: string | null = null;

        // If a new image is selected, upload it
        if (selectedImage) {
          uploadedUrl = await uploadImage(selectedImage);
        }

        const payload = {
          ...data,
          refereeSignature: uploadedUrl,
          reEmploy: data?.reEmploy?.value,
        };

        addForm.mutate(
          { data: payload, token },
          {
            onSettled: () => {
              setIsSubmitting(false);
              nav("/");
            },
          }
        );
      } catch (error) {
        console.error("Error submitting referee form:", error);
        setIsSubmitting(false);
      }
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(refereeSchema),
    defaultValues: {
      relationship: "",
      positionHeld: "",
      startDate: "",
      endDate: "",
      reasonForLeaving: "",
      salary: undefined,
      performance: "",
      conduct: "",
      integrity: "",
      additionalComments: "",
      reEmploy: {
        label: "",
        value: "",
      },
    },
  });
  console.log(errors);

  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 border border-[#E8EAED] py-5 px-5"
        >
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex-1">
              <Controller
                name="positionHeld"
                control={control}
                render={({ field }) => (
                  <div className="flex-1">
                    <Input
                      placeholder="Enter position held"
                      disabled={false}
                      variant="outlined"
                      multiline={false}
                      row={1}
                      {...field}
                      label="Position held"
                      width="100%"
                      height="70%"
                      error={errors?.positionHeld}
                      type="text"
                    />
                  </div>
                )}
              />
            </div>
            <div className="flex-1 mt-0">
              <Controller
                name="reasonForLeaving"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Enter reason for leaving"
                    disabled={false}
                    variant="outlined"
                    multiline={false}
                    row={1}
                    {...field}
                    label="Reason for leaving"
                    width="100%"
                    height="70%"
                    error={errors.reasonForLeaving}
                    type="text"
                  />
                )}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex-1 mt-0">
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <DateInput
                    width="100%"
                    field={field}
                    label="Start Date"
                    error={errors.startDate}
                  />
                )}
              />
            </div>
            <div className="flex-1">
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <DateInput
                    width="100%"
                    field={field}
                    label="End Date"
                    error={errors.endDate}
                  />
                )}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex-1 mt-0">
              <Controller
                name="salary"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Enter salary"
                    disabled={false}
                    variant="outlined"
                    multiline={false}
                    row={1}
                    {...field}
                    label="Salary"
                    width="100%"
                    height="70%"
                    error={errors.salary}
                    type="number"
                  />
                )}
              />
            </div>
            <div className="flex-1">
              <Controller
                name="performance"
                control={control}
                render={({ field }) => (
                  <div className="flex-1">
                    <Input
                      placeholder="Enter performance rating"
                      disabled={false}
                      variant="outlined"
                      multiline={false}
                      row={1}
                      {...field}
                      label="Performance"
                      width="100%"
                      height="70%"
                      error={errors?.performance}
                      type="text"
                    />
                  </div>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex-1 mt-0">
              <Controller
                name="conduct"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Enter conduct information"
                    disabled={false}
                    variant="outlined"
                    multiline={false}
                    row={1}
                    {...field}
                    label="Conduct"
                    width="100%"
                    height="70%"
                    error={errors.conduct}
                    type="text"
                  />
                )}
              />
            </div>
            <div className="flex-1">
              <Controller
                name="integrity"
                control={control}
                render={({ field }) => (
                  <div className="flex-1">
                    <Input
                      placeholder="Enter integrity information"
                      disabled={false}
                      variant="outlined"
                      multiline={false}
                      row={1}
                      {...field}
                      label="Integrity"
                      width="100%"
                      height="70%"
                      error={errors?.integrity}
                      type="text"
                    />
                  </div>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex-1">
              <Controller
                name="relationship"
                control={control}
                render={({ field }) => {
                  console.log(field);
                  return (
                    <div className="flex-1">
                      <Input
                        {...field}
                        placeholder="Enter relationship"
                        disabled={false}
                        variant="outlined"
                        multiline={false}
                        row={1}
                        value={field?.value}
                        label="Relationship"
                        width="100%"
                        height="70%"
                        error={errors?.relationship}
                        type="text"
                      />
                    </div>
                  );
                }}
              />
            </div>
            <div className="flex-1">
              <Controller
                name="reEmploy"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Select
                    height="60px"
                    label="Would Rehire"
                    value={value}
                    onChange={(selectedOption) => {
                      onChange(selectedOption);
                    }}
                    onBlur={onBlur}
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                      { label: "Maybe", value: "Maybe" },
                    ]}
                    validationError={errors?.reEmploy}
                  />
                )}
              />
            </div>
          </div>

          <div className="flex-1 mt-3">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
              className="w-full"
            />
            <div>
              <h3 className="mt-2 text-[#060606]"> Referee Signature </h3>
            </div>
            <div
              onClick={handleImageClick}
              className="cursor-pointer flex flex-col mt-3 justify-center w-full"
            >
              <div className="border  border-dashed py-3 px-3 w-full">
                <div className="flex justify-between">
                  <h4>{selectedImage ? selectedImage.name : "Filename"}</h4>
                  <IoCloudUploadOutline className="mt-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-3">
            <Controller
              name="additionalComments"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Additional comments"
                  disabled={false}
                  variant="outlined"
                  multiline={true}
                  row={5}
                  {...field}
                  label="Additional Comments"
                  width="100%"
                  height="70%"
                  error={errors.additionalComments}
                  type="text"
                />
              )}
            />
          </div>

          <div>
            <BaseButton
              loading={isSubmitting}
              disabled={isSubmitting}
              text="Submit"
              type="submit"
              className="w-full mt-4"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ReferenceForm;
