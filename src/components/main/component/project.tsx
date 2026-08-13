import { useState } from "react"

interface ProjectProps {
    project: {
        nome: string
        descricao: string
        videoSrc: string
        videoPublicId: string
        imagemSrc: string
        imagemPublicId: string
        deployUrl: string
        githubUrl: string
        tecnologias: [
                {
                    tecnologia_id: number
                    projeto_id: number
                    tecnologia: {
                        id: number
                        nome: string
                        iconeSrc: string
                    }
                }
            ],
    }
}

function Project({ project }: ProjectProps) {
    const [verMaisButton, setVerMaisButton] = useState(false)
    const [projAboutVisible, setProjAboutVisible] = useState(false)

    return (
        <>
            <div id="proj" className="proj" onMouseEnter={() => setVerMaisButton(true)} onMouseLeave={() => setVerMaisButton(false)}>
                <div id="proj_img1" className="img_carro">
                    <h4>{project.nome}</h4>
                    <img src={project.imagemSrc} alt="amor de casquinha site"/>
                </div>
                <div id="ver_mais1" className={verMaisButton ? "ver_mais exibir" : "ver_mais"} onClick={() => setProjAboutVisible(true)}>
                    <button>Ver mais</button>
                </div>
            </div>

            <div id="proj_about" className={projAboutVisible ? "proj_about ver_cont" : "proj_about dispNone"} >
                <div className="head_proj">
                    <span className="closeSpanWhite" onClick={() => setProjAboutVisible(false)} >X</span>
                    <div className="title_proj">
                        {project.videoSrc && <video src={project.videoSrc} controls></video>}
                        <h4>{project.nome}</h4>
                        
                    </div>
                    <div className="icon_proj">
                        {project.tecnologias && project.tecnologias?.map((tecnologia) => (
                            <>
                                <p key={tecnologia.tecnologia_id}>{tecnologia.tecnologia.nome}</p>
                            </>
                        ))}
                    </div>
                    <div>
                        {project.githubUrl && (
                            <button>
                                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                    Repositório
                                </a>
                            </button>
                        )}
                        {project.deployUrl && (
                            <button>
                                <a href={project.deployUrl} target="_blank" rel="noreferrer">
                                    Deploy
                                </a>
                            </button>
                        )}
                    </div>
                </div>
                    <div className="sobre">
                        <div 
                            dangerouslySetInnerHTML={{ __html: project.descricao }} 
                        />
                    </div>
            </div>
        </>
    )
}

export default Project
