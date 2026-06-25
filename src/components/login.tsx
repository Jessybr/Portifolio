interface LoginProps {
    displayFormLogin: boolean
    setDisplayFormLogin: React.Dispatch<React.SetStateAction<boolean>>
}

function Login({ displayFormLogin, setDisplayFormLogin }: LoginProps) {
    return (
        <>
        <div className={displayFormLogin? "fixed cont_login" : "dispNone cont_login"}>
            <span className="fechar_login" onClick={() => setDisplayFormLogin(false)}>X</span>
            <h2>Login</h2>
            <form action="" method="post">
                <input type="text" name="email" id="email" placeholder="Email" />
                <input type="password" name="password" id="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
            </form>
        </div>
        </>
    )
}

export default Login