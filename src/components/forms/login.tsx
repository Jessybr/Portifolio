import { useState } from "react";
import { login } from "../../api/authApi"
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

interface LoginProps {
    displayFormLogin: boolean
    setDisplayFormLogin: React.Dispatch<React.SetStateAction<boolean>>
    setLoginIn: React.Dispatch<React.SetStateAction<boolean>>
}

function Login({ displayFormLogin, setDisplayFormLogin, setLoginIn }: LoginProps) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("")
    
        const popUpError = () => {
    
            if(errorMessage == "Erro 401"){
                toast.error("Credenciais inválidas, tente novamente.", 
                    {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
            }
            
        }

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
            setDisplayFormLogin(false)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const msg = `Erro ${error.response?.status}`
                setErrorMessage(msg)
                popUpError()
            }
        }
    }

    return (
        <>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            />
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