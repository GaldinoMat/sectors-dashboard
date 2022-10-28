import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRole } from '../../../../store/modules/roles/actions'
import { SubmissionButton } from './typings/types'

function RoleForm() {
  const dispatch = useDispatch()
  const [role, setRole] = useState("")

  const handleRoleSubmission = () => {
    dispatch(addRole(role))
    setRole("")
  }

  return (
    <div className='flex flex-col items-end gap-4'>
      <div className='flex gap-3 w-full items-end'>
        <div className='flex flex-col gap-3 w-full'>
          <label htmlFor="role" className='text-sm'>Cargo(s):</label>
          <input type="text" name="role" id="role" className='bg-gray-400 text-white h-12 outline-gray-900' value={role} onChange={(e) => setRole(e.target.value)} />
        </div>
        <SubmitButton handleRoleSubmission={handleRoleSubmission} />
      </div>
    </div>
  )
}

function SubmitButton({ handleRoleSubmission }: SubmissionButton) {
  return (
    <button className='bg-gray-600 text-white py-2 max-w-[132px] h-12 w-full' type='button' onClick={() => handleRoleSubmission()}>Adicionar</button>
  )
}

export default RoleForm;