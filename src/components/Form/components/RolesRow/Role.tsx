import { useDispatch } from "react-redux"
import { deleteRole } from "../../../../store/modules/roles/actions"
import DeleteRole from "../../../../assets/DeleteRole.svg"
import { RoleType } from "./typings/types"
import React from "react"

function Role({ role }: RoleType) {
  const dispatch = useDispatch()
  const handleRoleDeletion = () => dispatch(deleteRole(role))

  return (
    <span className='flex px-3 py-[7px] justify-center items-center gap-3 bg-white max-w-[121px]'>
      <p className='text-xs'>{role}</p>
      <button type='button' onClick={() => handleRoleDeletion()}>
        <img src={DeleteRole} alt="delete role button" />
      </button>
    </span>
  )
}

export default Role