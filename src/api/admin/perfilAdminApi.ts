import api from "../api"

export async function patchPerfil(
  data: FormData
) {
    const response = await api.patch(
        "/perfil",
        data
    );

    return response.data;
}