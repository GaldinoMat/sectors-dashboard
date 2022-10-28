import clsx from "clsx"
import type { InfoCard, OpenCard, RoleType } from "../../typings/types"
import DeleteButton from "../DeleteButton"
import Expand from "../../../../assets/Expand.svg"
import Editbutton from "../EditButton"
import React from "react"

function SectorInfoCard({ isOpen, setIsOpen, ...sector }: InfoCard) {
  const { id, roles, sectorName } = sector

  return (
    <>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-lg'>{sectorName}</h3>
        </div>
        <ExpandButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={clsx('px-4 overflow-hidden flex flex-col items-center gap-3 xl:px-10', {
        "max-h-full h-full": isOpen,
        "max-h-0 h-0": !isOpen
      })}>
        <div className='flex flex-wrap justify-center gap-3'>
          {roles.map(role => (
            <RoleSpan role={role} key={role} />
          ))}
        </div>
        <div className='flex gap-3'>
          <Editbutton roles={roles} sector={sector} />
          <DeleteButton id={id} />
        </div>
      </div>
    </>
  )
}

function ExpandButton({ isOpen, setIsOpen }: OpenCard) {
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={Expand} alt="expand button" className={
          clsx("transition-all duration-75", {
            "rotate-180": isOpen,
            "rotate-0": !isOpen
          })
        } />
      </button>
    </div>
  )
}

function RoleSpan({ role }: RoleType) {
  return (
    <span className='bg-gray-300 px-3 py-2'>{role}</span>
  )
}

export default SectorInfoCard;