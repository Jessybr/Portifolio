import Main from './components/main/main.tsx'
import Navigation from './components/navigation.tsx'
import Perfil from './components/perfil.tsx'
import './style/style.css'
import Login from './components/forms/login.tsx'
import { useState } from 'react'
import PerfilForm from './components/forms/perfilForm.tsx'
import SkillForm from './components/forms/skillForm.tsx'
import Footer from './components/footer.tsx'
import ProjectForm from './components/forms/projectForm.tsx'

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
            setDisplayPerfilForm={setDisplayPerfilForm}/>
        <SkillForm 
            displaySkillForm={displaySkillForm}
            setDisplaySkillForm={setDisplaySkillForm}/>
        <ProjectForm 
            displayProjectForm={displayProjectForm}
            setDisplayProjectForm={setDisplayProjectForm}/>
        <Navigation
            loginIn={loginIn}
            setLoginIn={setLoginIn}/>
        <Perfil 
            setDisplayFormLogin={setDisplayFormLogin}
            displayPerfilForm={displayPerfilForm}
            setDisplayPerfilForm={setDisplayPerfilForm}
            loginIn={loginIn}
        <Main 
            setDisplaySkillForm={setDisplaySkillForm}
            setDisplayProjectForm={setDisplayProjectForm}
            loginIn={loginIn}
            />
        <Footer />
    </>
  )
}

export default App
