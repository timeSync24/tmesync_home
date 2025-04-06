import axios from "axios";
import { API_ENDPOINTS } from "../constants/api";
import { IRef } from "../model/reference";

export function createRefereeForm({
  data,
  token,
}: {
  data: IRef;
  token: string;
}) {
  return axios.post(`${API_ENDPOINTS.APP.POST_REFEREE}?token=${token}`, data);
}
