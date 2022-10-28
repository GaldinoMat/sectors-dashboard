import React from "react"
import { useSelector } from "react-redux"
import { IStateType } from "../../../../store"
import Role from "./Role"

function RolesRow() {
  const { roles } = useSelector<IStateType, IStateType>((state) => state).roles

  return (
    <div className='flex gap-3'>
      {roles.map(role => (
        <Role role={role} key={role} />
      ))}
    </div>
  )
}

export default RolesRow