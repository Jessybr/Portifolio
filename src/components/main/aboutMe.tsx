interface AboutMeData {
    id: number
    sobreMim: string
}

function AboutMe() {
    const [aboutMe, setAboutme] = useState<AboutMeData | null>(null)
    const [loading, setLoading] = useState(false)

    return (
        <>
        <div id="sobre" className="cont_about">
            <h3 className="topic_title">Sobre mim</h3>
            <p>Sou uma Desenvolvedora de Software com experiência em projetos utilizando PHP, ReactJS, Bootstrap, Java, banco de dados relacionais, além de um design responsível. Atualmente faço Análise e Desenvolvimento de Sistemas no IFSP e já participei de vários projetos nesse meio tempo. Sou eficaz em equipes, comunicativa e emocionalmente inteligente, promovendo um ambiente positivo. Minha flexibilidade e motivação impulsionam minha busca constante por novos desafios e conhecimentos.</p>
        </div>
        </>
    )
}

export default AboutMe