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
    <a href='/' className='px-9 py-[26px] flex flex-col bg-gray-300 items-center justify-center gap-[15px]'>
      <img src={Sector} alt="header logo" className='w-6 h-6' />
      <p>Setores</p>
    </a>
  )
}

export default Header