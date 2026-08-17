import Main from './components/main/main.tsx'
import Navigation from './components/navigation.tsx'
import './style/style.css'
import { useState } from 'react'
import Footer from './components/footer.tsx'
import { Bounce, ToastContainer } from 'react-toastify'

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
        <ToastContainer/>
        <Navigation
            loginIn={loginIn}
            setLoginIn={setLoginIn}/>
        <Main 
            displaySkillForm={displaySkillForm}
            setDisplaySkillForm={setDisplaySkillForm}
            setDisplayProjectForm={setDisplayProjectForm}
            loginIn={loginIn}
            displayProjectForm={displayProjectForm}
            displayFormLogin={displayFormLogin}
            setDisplayFormLogin={setDisplayFormLogin}
            displayPerfilForm={displayPerfilForm}
            setDisplayPerfilForm={setDisplayPerfilForm}
            setLoginIn={setLoginIn}/>
        <Footer />
    </>
  )
}

export default App
