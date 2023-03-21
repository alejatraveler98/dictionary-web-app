import { useEffect, useRef, useState } from "react";
import Dictionary from "./Icons/Dictionary";
import IconArrowDown from "./Icons/IconArrowDown";
import Moon from "./Icons/Moon";
const Header = () => {

  const [themeMode, setThemeMode] = useState(false)
  const [modalFontMode, setModalFontMode] = useState(false)
  const [nameMode, setNameMode] = useState('Sans Serif')
  const checkRef = useRef()
  useEffect(() => {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      checkRef.current.checked=true      
    }else{
      checkRef.current.checked = false
    }
  }, [])
  

  const handleTheme = (e) =>{
    
    checkRef.current.checked=themeMode
    setThemeMode(!themeMode);
    
    if(themeMode){
      document.body.classList.toggle('dark-mode')
      document.body.classList.remove('light-mode')
    }else{
      document.body.classList.toggle('light-mode')
      document.body.classList.remove('dark-mode')

    }
  }

  const handleFonts = (e) =>{
    e.preventDefault()
    setModalFontMode(!modalFontMode);
  }

  const changeFont = (e) =>{
    e.preventDefault()
    setNameMode(e.target.textContent)
    setModalFontMode(!modalFontMode);
    switch (e.target.textContent) {
      case 'Sans Serif':
        document.body.className= 'font-sans-serif'
        break;
      case 'Serif':
        document.body.className = 'font-serif'
        break;
      case 'Mono':
        document.body.className = 'font-mono'  
        break;
    }
  }
  return (
    <header className="main-header">
        <Dictionary/>
        <nav className="main-header-theme">
          <div className="p-relative">
            <div className="main-header-theme__selection" onClick={handleFonts}>
              {nameMode}
              <IconArrowDown/>
            </div>
            <ul className={`main-header-fonts ${modalFontMode && 'open'}`} id="selectFonts">
              <li onClick={changeFont}>Sans Serif</li>
              <li onClick={changeFont}>Serif</li>
              <li onClick={changeFont}>Mono</li>
            </ul>
          </div>
          
            <div>
              <label htmlFor="checkTheme">
                <input className="check-theme" type="checkbox" name="checkTheme" id="checkTheme" ref={checkRef}  onClick={(e)=>handleTheme(e)}/>
                <span className="check-theme-icon"></span>
              </label>
            </div>
            <Moon/>
        </nav>
    </header>
  )
}

export default Header