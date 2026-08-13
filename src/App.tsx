import Main from './components/main/main.tsx'
import Navigation from './components/navigation.tsx'
import Perfil from './components/perfil.tsx'
import './style/style.css'
import Login from './components/forms/login.tsx'
import { useState } from 'react'
import PerfilForm from './components/forms/perfilForm.tsx'
import SkillForm from './components/forms/skillForm.tsx'
import Footer from './components/footer.tsx'

interface PerfilData {
    id: number
    nomeCompleto: string
    linkedinUrl: string
    githubUrl: string
    curriculoSrc: string
    fotoSrc: string
    breveDescricao: string
}

function App() {
    const [loginIn, setLoginIn] = useState<boolean>(() => {
        const token = localStorage.getItem("token");
        return !!token; 
    });
    const [displayFormLogin, setDisplayFormLogin] = useState(false)
    const [displayPerfilForm, setDisplayPerfilForm] = useState(false)
    const [displaySkillForm, setDisplaySkillForm] = useState(false)
    const [displayProjectForm, setDisplayProjectForm] = useState(false)
    const [perfil, setPerfil] = useState<PerfilData | null>(null)
    const translucid = displayFormLogin || displayPerfilForm || displaySkillForm || displayProjectForm

  return (
    <>
        <div className={translucid? "background_translucid":"dispNone"}></div>
        <Login 
            displayFormLogin={displayFormLogin}
            setDisplayFormLogin={setDisplayFormLogin}
            setLoginIn={setLoginIn}/>
        <PerfilForm 
            displayPerfilForm={displayPerfilForm}
            setDisplayPerfilForm={setDisplayPerfilForm}
            setPerfil={setPerfil}/>
        <SkillForm 
            displaySkillForm={displaySkillForm}
            setDisplaySkillForm={setDisplaySkillForm}/>
        <Navigation
            loginIn={loginIn}
            setLoginIn={setLoginIn}/>
        <Perfil 
            setDisplayFormLogin={setDisplayFormLogin}
            displayPerfilForm={displayPerfilForm}
            setDisplayPerfilForm={setDisplayPerfilForm}
            loginIn={loginIn}
            perfil={perfil}
            setPerfil={setPerfil}/>
        <Main 
            setDisplaySkillForm={setDisplaySkillForm}
            setDisplayProjectForm={setDisplayProjectForm}
            loginIn={loginIn}
            displayProjectForm={displayProjectForm}
            />
        <Footer />
    </>
  )
}

export default App
