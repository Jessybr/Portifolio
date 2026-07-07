interface ProjectFormProps {
    displayProjectForm: boolean
    setDisplayProjectForm: React.Dispatch<React.SetStateAction<boolean>>
}

function ProjectForm({ displayProjectForm, setDisplayProjectForm }: ProjectFormProps) {
    return (
        <>
        <div className={displayProjectForm? "projectForm fixed":"projectForm dispNone"}>
            <span className="fechar_login" onClick={() => setDisplayProjectForm(false)} >X</span>
            <h2>Projetos</h2>
            <form action="">
                <input list="projeto" id="projetoEscolhido" name="projetoEscolhido" placeholder="Escolha o Projeto"/>
                <datalist id="projeto">
                    <option value="Novo Projeto"/>
                    <option value="Amor na Casquinha"/>
                    <option value="Spotfy"/>
                    <option value="API - Porfólio"/>
                    <option value="Biblioteca"/>
                </datalist>
                <input type="text" name="nome" id="nome" placeholder="Nome"/>
                <textarea name="descricao" id="descricao" placeholder="Descrição"></textarea>
                <input type="text" name="githubURL" id="githubURL" placeholder="Repositório"/>
                <input type="text" name="deployURL" id="deployURL" placeholder="Site"/>
                <div className="active_button">
                    <label htmlFor="ativo">
                        Ativo
                    </label>
                        <input type="radio" name="ativo" value="ativo"/> 
                    <label htmlFor="ativo">Desativado
                    </label>
                        <input type="radio" name="ativo" value="desativado"/> 
                </div>
                <label htmlFor="imagem">Imagem</label>
                <input type="file" name="imagem" id="imagem"/>
                <label htmlFor="video">Vídeo</label>
                <input type="file" name="video" id="video"/>
                <button type="submit">Salvar</button>
            </form>
        </div>
        </>
    )
}

export default ProjectForm