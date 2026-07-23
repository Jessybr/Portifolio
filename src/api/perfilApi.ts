import api from "./api";

export async function getPerfil() {
    const response = await api.get("/perfil")
    return response
}