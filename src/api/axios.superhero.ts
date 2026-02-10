import axios from "axios";
import { API_BASE_URL } from "../constants/constants";

export const superhero_client = axios.create({
  baseURL: `${API_BASE_URL}/superhero`,
});
