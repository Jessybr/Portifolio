import { useEffect, useState } from "react"
import { getPerfil } from "../../api/perfilApi"

interface AboutMeData {
    id: number
    sobreMim: string
}

function AboutMe() {
    const [aboutMe, setAboutme] = useState<AboutMeData | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadPerfil() {
            setLoading(true)
            try {
                const response = await getPerfil()
                setAboutme(response.data.data.perfil)
            } catch(error) {
                console.error("Erro ao carregar projetos", error)
            } finally {
                setLoading(false)
            }
        }

        loadPerfil()
    }, [])
    return (
        <>
        <div id="sobre" className="cont_about">
            <h3 className="topic_title">Sobre mim</h3>
            {loading ? 
                (<p>Carregando texto...</p>) : (
                    <p>{aboutMe?.sobreMim}</p>
            )}
        </div>
        </>
    )
}

export default AboutMe