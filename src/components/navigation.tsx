interface HeadProps {
    loginIn: boolean
    setLoginIn: React.Dispatch<React.SetStateAction<boolean>>
}

function Head({ loginIn, setLoginIn }: HeadProps) {
    function Logout() {
        localStorage.removeItem("token")
        setLoginIn(false)
    }

    return (
        <>
        <nav>
            <div className="cont_naveg">
                <h3><a href="#habili">Habilidades</a></h3>
                <h3><a href="#proje">Projetos</a></h3>
                <h3><a href="#sobre">Sobre</a></h3>
                <h3><a href="#contat">Contato</a></h3>
                <h3><button onClick={Logout} className={loginIn? "dispBlock" : "dispNone"}>Sair</button></h3>
            </div>
        </nav>
        </>
    )
}

export default Head