import { AxiosError } from "axios";
import { image_client } from "../../../api/axios.image";

export async function uploadImages(id: number, formData: FormData) {
  try {
    const response = await image_client.post(`/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }

      throw error;
    }

    console.log(error);
    throw new Error("Something went wrong");
  }
}

export async function deleteImage(id: number) {
  try {
    const response = await image_client.delete(`/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }

      throw error;
    }

    console.log(error);
    throw new Error("Something went wrong");
  }
}
