import Main from './components/main.tsx'
import Navigation from './components/navigation.tsx'
import Perfil from './components/perfil.tsx'
import './style/style.css'
import Login from './components/login.tsx'
import { useState } from 'react'

function App() {
    const [displayFormLogin, setDisplayFormLogin] = useState(false)

  return (
    <>
        <div className={displayFormLogin? "backgound_translucid":"dispNone"}></div>
        <Login 
            displayFormLogin={displayFormLogin}
            setDisplayFormLogin={setDisplayFormLogin}/>
        <PerfilForm 
            displayPerfilForm={displayPerfilForm}
            setDisplayPerfilForm={setDisplayPerfilForm}/>
        <Navigation />
        <Perfil 
            setDisplayFormLogin={setDisplayFormLogin}/>
        <Main />
    </>
  )
}

export default App
