import axios from "axios";
import { API_BASE_URL } from "../constants/constants";

export const image_client = axios.create({
  baseURL: `${API_BASE_URL}/image`,
});
