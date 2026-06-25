import api from "./api";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}


export async function login(
  data: LoginRequest
): Promise<LoginResponse> {

  const response = await api.post<LoginResponse>(
    "/auth/login",
    data
  );

  return response.data;
}