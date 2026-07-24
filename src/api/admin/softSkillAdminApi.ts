import api from "../api";

interface SoftSkillRequest {
    nome: string
    iconeSrc: string
}

export async function postSoftSkill(
  data: SoftSkillRequest
) {
  const response = await api.post(
    "/softSkill",
    data
  );

  return response.data;
}

export async function deleteSoftSkill(id: number) {
    const response = await api.delete(
        `/softSkill/${id}`
    )
    return response.data
}