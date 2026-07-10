import api from "./api";

interface LoginRequest {
    username: string
    password: string
}

interface LoginResponse {
    status: number
    success: boolean
    message: string
    data: {
        token: string
    }
}


export async function login(
  data: LoginRequest
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>(
    "/login",
    data
  );

  return response.data;
}