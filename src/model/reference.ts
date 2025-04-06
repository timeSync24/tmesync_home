/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRef {
  referenceId: string;
  companyId: string;
  employeeId?: string;
  refereeId: string;
  relationship: string;
  positionHeld: string;
  startDate: string;
  endDate: string;
  reasonForLeaving: string;
  salary: string;
  performance: string;
  conduct: string;
  integrity: string;
  refereeDetails: string;
  additionalComments: string;
  reEmploy: string;
  refereeSignature: string;
  status: string;
  createdBy: string;
  updatedBy: any;
  token: string;
  tokenExpiresAt: string;
  createdAt: string;
  updatedAt: string;
  referee: Referee;
  employee: Employee;
}

export interface Referee {
  name: string;
  email: string;
  companyName: string;
  positionHeld: string;
}

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
}
