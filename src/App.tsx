import clsx from 'clsx'
import React, { useCallback } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SectorForm from './components/Form'
import Header from './components/Header'
import SectorsInfo from './components/SectorsInfo'
import WarningModal from './components/WarningModal'
import { IStateType } from './store'
import { fetchSectors, loadSectors } from './store/modules/sectors/actions'

function App() {
  const dispatch = useDispatch()
  const { isWarning } = useSelector<IStateType, IStateType>((state) => state).warnings.warning

  const getSectors = useCallback(
    async () => {
      const { data } = await dispatch(fetchSectors())
      
      dispatch(loadSectors(data))
    }, [dispatch]
  )

  useEffect(() => {
    getSectors()
  }, [getSectors])

  return (
    <div className="p-4 md:max-w-xl xl:max-w-7xl xl:max-h-screen xl:px-0 flex flex-col mx-auto gap-5 relative">
      <Header />
      <WarningModal />
      <main className={clsx('flex flex-col xl:flex-row gap-[18px] xl:h-screen',
        {
          "pointer-events-none": isWarning,
          "pointer-events-auto": !isWarning
        },
      )}>
        <SectorsInfo />
        <SectorForm />
      </main>
    </div>
  )
}

export default App
