import type { TechnologyRequest } from "../../types/technology";
import api from "../api";

export async function postTechnology(data: TechnologyRequest) {
  const response = await api.post(
    "/technology",
    data
  );

  return response.data
}

export async function deleteTechnology(id: number) {
    const response = await api.delete(
        `/technology/${id}`
    )
    
    return response.data
}
