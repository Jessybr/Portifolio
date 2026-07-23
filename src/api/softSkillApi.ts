import api from "./api";

export async function getSoftSkill() {
    const response = await api.get("/softSkills")
    return response.data
}