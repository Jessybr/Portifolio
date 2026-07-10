import { useState } from "react";
import { login } from "../../api/authApi"

interface LoginProps {
    displayFormLogin: boolean
    setDisplayFormLogin: React.Dispatch<React.SetStateAction<boolean>>
    setLoginIn: React.Dispatch<React.SetStateAction<boolean>>
}

function Login({ displayFormLogin, setDisplayFormLogin, setLoginIn }: LoginProps) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const response = await login({
                username,
                password,
            })

            localStorage.setItem(
                "token",
                response.data.token
            )

            setLoginIn(true)
        } catch (error) {
            console.error("Erro ao fazer login", error)
        }
    }

    return (
        <>
        <div className={displayFormLogin? "fixed cont_login" : "dispNone cont_login"}>
            <span className="closeSpanBlack" onClick={() => setDisplayFormLogin(false)}>X</span>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} method="post">
                <input type="text" name="email" id="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" name="password" id="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Entrar</button>
            </form>
        </div>
        </>
    )
}

export default Login