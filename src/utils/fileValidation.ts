const MAX_FILE_SIZE = 100 * 1024 * 1024

export function validateFile(file: File, allowedTypes: string[]): string | null {
    if (file.size > MAX_FILE_SIZE) {
        return 'O arquivo deve ter no máximo 100 MB.'
    }

    if (!allowedTypes.includes(file.type)) {
        return 'Tipo de arquivo não permitido.'
    }

    return null
}