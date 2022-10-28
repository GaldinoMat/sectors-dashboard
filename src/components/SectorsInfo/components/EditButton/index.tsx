import React from 'react'
import { useDispatch } from 'react-redux'
import { addSectorToEdit } from '../../../../store/modules/editSector/actions'
import { clearRoles, loadRoles } from '../../../../store/modules/roles/actions'
import type { EditButton } from './typings/types'

function Editbutton({ sector, roles }: EditButton) {
  const dispatch = useDispatch()

  const handleEditRequest = () => {
    dispatch(clearRoles())
    dispatch(addSectorToEdit(sector))
    dispatch(loadRoles(roles))
  }

  return (
    <button onClick={() => handleEditRequest()} className='bg-blue rounded text-white px-3 py-2'>Editar</button>
  )
}

export default Editbutton