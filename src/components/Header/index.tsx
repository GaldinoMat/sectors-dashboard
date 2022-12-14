import React from "react"
import Sector from "../../assets/Sector.svg"

function Header() {
  return (
    <header className='w-full flex items-start justify-start'>
      <HeaderLogo />
    </header>
  )
}

function HeaderLogo() {
  return (
    <a href='/' className='px-9 py-[26px] flex flex-col bg-blue rounded-lg items-center justify-center gap-[15px] drop-shadow-header'>
      <img src={Sector} alt="header logo" className='w-6 h-6 ' />
      <p className="text-white">Setores</p>
    </a>
  )
}

export default Header