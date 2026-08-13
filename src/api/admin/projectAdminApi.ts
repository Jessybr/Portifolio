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

export async function updateProjectStatusById(id: number) {
    const response = await api.patch(`/project/active/${id}`)
    return response.data
}

export async function deleteProjectById(id: number) {
    const response = await api.delete(`/project/${id}`)
    return response.data
}