import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { IStateType } from '../../store'
import { dispatchWarning } from '../../store/modules/warning/actions'

function WarningModal() {
  const dispatch = useDispatch()
  const { isWarning, text } = useSelector<IStateType, IStateType>((state) => state).warnings.warning

  return (
    <>
      {isWarning && (
        <div className='drop-shadow-header fixed z-10 m-auto top-0 bottom-0 left-0 right-0 max-w-xs h-fit'>
          <div className='px-16 py-4 h-36
         bg-blue flex flex-col items-center justify-between gap-2'>
            <p className='text-center text-white'>{text}</p>
            <button className='bg-white text-faded-text font-medium py-2 max-w-[132px] h-12 w-full' onClick={() => dispatch(dispatchWarning(false, ""))} type='button'>OK</button>
          </div>
        </div>
      )}
    </>
  )
}

export default WarningModal