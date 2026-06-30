interface PerfilFormProps {
    displayPerfilForm: boolean
    setDisplayPerfilForm: React.Dispatch<React.SetStateAction<boolean>>
}

function PerfilForm({ displayPerfilForm, setDisplayPerfilForm }: PerfilFormProps) {
    return (
        <>
        <div className={displayPerfilForm? "perfilForm fixed" : "perfilForm dispNone"}>
            <form action="">
                <span className="fechar_login" onClick={() => setDisplayPerfilForm(false)}>X</span>
                <h2>Editar Perfil</h2>
                <input type="text" name="nomeCompleto" id="nomeCompleto" placeholder="Nome Completo"/>
                <textarea name="descricao" id="descricao" placeholder="Descrição"></textarea>
                <input type="text" name="githubURL" id="githubURL" placeholder="Github"/>
                <input type="text" name="linkedinURL" id="linkedinURL" placeholder="Linkedin"/>
                <label htmlFor="curriculoSRC">Currículo</label>
                <input type="file" name="curriculoSRC" id="curriculoSRC" placeholder="Currículo"/>
                <label htmlFor="fotoSRC">Foto</label>
                <input type="file" name="fotoSRC" id="fotoSRC" placeholder="fotoSRC"/>
                <button type="submit">Salvar</button>
            </form>
        </div>
        </>
    )
}

export default PerfilForm