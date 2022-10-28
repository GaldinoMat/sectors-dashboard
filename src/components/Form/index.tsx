import React from 'react'
import { FormEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { IStateType } from '../../store'
import { addSectorToEdit, updateEditSector } from '../../store/modules/editSector/actions'
import { clearRoles } from '../../store/modules/roles/actions'
import { addEditedSector, createSector, postSector } from '../../store/modules/sectors/actions'
import { dispatchWarning } from '../../store/modules/warning/actions'
import type { Sector } from '../../typings/types'
import RoleForm from './components/RoleForm/RoleForm'
import RolesRow from './components/RolesRow/RolesRow'


function SectorForm() {
  const dispatch = useDispatch()
  const [sectorName, setSectorName] = useState<string>("")
  const { roles } = useSelector<IStateType, IStateType>((state) => state).roles
  const { sectors } = useSelector<IStateType, IStateType>((state) => state).sectors
  const { id, sectorName: editSectorName } = useSelector<IStateType, IStateType>((state) => state).sector
  const [modifiedSectorName, setModifiedSectorName] = useState<string>(editSectorName)

  const checkRepeatedValues = () => {
    const filteredSectors = id === 0 ? sectors : sectors.filter(sector => sector.id !== id)

    const isSectorNameFound = filteredSectors.some((sector: Sector) => sector.sectorName.toLowerCase() === sectorName.toLowerCase())

    const isRoleRepeated = filteredSectors.some((sector: Sector) => sector.roles.some(role => roles.includes(role)))

    return isSectorNameFound || isRoleRepeated
  }

  const dispatchSector = async () => {
    const sector = {
      id: Math.floor(Math.random() * 6000) + 1,
      sectorName: sectorName,
      roles
    }

    dispatch(createSector(sector))
    dispatch(postSector(sector))
    dispatch(clearRoles())
  }

  const dispatchEditedSector = async () => {
    const editedSector: Sector = {
      id,
      sectorName: modifiedSectorName,
      roles
    }

    dispatch(addEditedSector(editedSector))
    dispatch(updateEditSector(editedSector))
    dispatch(clearRoles())
    dispatch(addSectorToEdit({
      id: 0,
      roles: [],
      sectorName: ""
    }))

  }

  const handleSectorSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!sectors) {
      await dispatchSector()
    } else {
      if (checkRepeatedValues()) {
        dispatch(dispatchWarning(true, "Atributos já existentes na base de dados, certifique-se de inserir valores únicos"))
        return;
      }

      if (id === 0) {
        await dispatchSector()
      } else {
        await dispatchEditedSector()
      }
    }

    setSectorName("")
  }

  useEffect(() => {
    setModifiedSectorName(editSectorName)
  }, [editSectorName])


  return (
    <form onSubmit={handleSectorSubmit} className='bg-white drop-shadow-header p-6 flex flex-col gap-[14px] xl:min-w-[842px] xl:pr-[49px] h-screen xl:h-full'>
      <section>
        {
          id === 0 ?
            (
              <h2 className='text-2xl uppercase'>Adicionar setor</h2>
            )
            :
            (
              <h2 className='text-2xl uppercase'>Editar {editSectorName}</h2>
            )
        }
      </section>
      <section className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3 w-full'>
          <label htmlFor="sector" className='text-sm font-medium'>Nome:</label>
          <input type="text" name="sector" id="sector" className='bg-input-background pl-3 text-black h-12 outline-input-background' required
            value={id === 0 ? sectorName : modifiedSectorName}
            onChange={(e) => id === 0 ? setSectorName(e.target.value) : setModifiedSectorName(e.target.value)}
          />
        </div>
        <RoleForm />
        <RolesRow />
      </section>
      <SaveFormButton />
    </form>
  )
}

function SaveFormButton() {
  return (
    <button className='bg-blue font-medium text-white py-2 max-w-[132px] h-12 w-full self-end mt-auto' type='submit'>Salvar</button>
  )
}

export default SectorForm