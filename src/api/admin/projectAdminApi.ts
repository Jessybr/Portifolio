import api from "../api"

export async function postProject(data: FormData) {
    const response = await api.post("/project", data)
    return response
}

export async function patchProjectById(id: number, data: FormData) {
    const response = await api.patch(`/project/${id}`, data)
    return response
}

export async function getAllProjects() {
    const response = await api.get("/project")
    return response
}