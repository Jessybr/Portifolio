import api from "./api";

export async function getTechnology() {
    const response = await api.get("/technology")
    return response.data
}