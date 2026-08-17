import { Bounce, toast } from "react-toastify"
import type { ToastOptions } from "react-toastify"

const defaultOptions: ToastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce,
}

export const showSuccessToast = (message: string) => {
    toast.success(message, defaultOptions)
}

export const showErrorToast = (message: string) => {
    toast.error(message, defaultOptions)
}

export const handleApiError = (statusCode?: number) => {
    switch (statusCode) {
        case 422:
            showErrorToast("Preencha todos os campos obrigatórios.")
            break

        case 401:
            showErrorToast("O token expirou, saia e faça login novamente.")
            break

        default:
            showErrorToast("Ocorreu um erro. Tente novamente.")
    }
}