import { AxiosError } from "axios";
import type { GetAllSuperheroesDto } from "../dto/getAllSuperheroes.dto";
import type { GetQueryDto } from "../dto/getQuery.dto";
import { superhero_client } from "../../../api/axios.superhero";
import type { GetSuperheroDto } from "../dto/getSuperhero.dto";

export async function getAllSuperheroes(
  dto?: GetQueryDto,
): Promise<GetAllSuperheroesDto> {
  try {
    const response = await superhero_client.get("/", {
      params: dto,
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

export async function getSuperheroById(id: number): Promise<GetSuperheroDto> {
  try {
    const response = await superhero_client.get(`/${id}`);

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

export async function createSuperhero(
  formData: FormData,
): Promise<GetSuperheroDto> {
  try {
    const response = await superhero_client.post("/", formData, {
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

export async function updateSuperhero(id: number, formData: FormData) {
  try {
    const response = await superhero_client.patch(`/${id}`, formData, {
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

export async function deleteSuperhero(id: number) {
  try {
    const response = await superhero_client.delete(`/${id}`);

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
