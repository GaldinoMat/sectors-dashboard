import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteSector, fetchSectors, loadSectors } from '../../../../store/modules/sectors/actions'
import type { DeleteId } from './typings/types'

function DeleteButton({ id }: DeleteId) {
  const dispatch = useDispatch()

  const handleDeletePost = async () => {
    await dispatch(deleteSector(id))
    const { data } = await dispatch(fetchSectors())
    dispatch(loadSectors(data))
  }
  return (
    <button onClick={() => handleDeletePost()} className='bg-gray-300 px-3 py-2'>Excluir</button>
  )
}

export default DeleteButton