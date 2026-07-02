import Main from './components/main.tsx'
import Navigation from './components/navigation.tsx'
import Perfil from './components/perfil.tsx'
import './style/style.css'
import Login from './components/login.tsx'
import { useState } from 'react'
import PerfilForm from './components/forms/perfilForm.tsx'

function App() {
    const [displayFormLogin, setDisplayFormLogin] = useState(false)
    const [displayPerfilForm, setDisplayPerfilForm] = useState(false)
    const translucid = displayFormLogin || displayPerfilForm

  return (
    <>
        <div className={translucid? "background_translucid":"dispNone"}></div>
        <Login 
            displayFormLogin={displayFormLogin}
            setDisplayFormLogin={setDisplayFormLogin}/>
        <PerfilForm 
            displayPerfilForm={displayPerfilForm}
            setDisplayPerfilForm={setDisplayPerfilForm}/>
        <SkillForm 
            displaySkillForm={displaySkillForm}
            setDisplaySkillForm={setDisplaySkillForm}/>
        <Navigation />
        <Perfil 
            setDisplayFormLogin={setDisplayFormLogin}
            displayPerfilForm={displayPerfilForm}
            setDisplayPerfilForm={setDisplayPerfilForm}/>
        <Main />
    </>
  )
}

export default App
