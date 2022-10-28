import { useState } from 'react'
import clsx from "clsx"
import type { Sector } from '../../../../typings/types'
import SectorInfoCard from '../SearchInfoCard'
import React from 'react'


function SectorInfo(sector: Sector) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-gray-400'>
      <div className={clsx('px-2 py-4 flex flex-col gap-5 transition-all duration-75', {
        "gap-5": isOpen,
        "gap-0": !isOpen
      })}>
        <SectorInfoCard isOpen={isOpen} setIsOpen={setIsOpen} roles={sector.roles} sectorName={sector.sectorName} id={sector.id} />
      </div>
    </div>
  )
}

export default SectorInfo