import api from "./api";

export async function getProjects() {
    const response = await api.get("/project/active")
    return response
}