import { Reducer } from "redux"
import type { SectorsObj } from '../../../typings/types';

const SECTORS_INITIAL_STATE: SectorsObj = {
  sectors: []
}

const sectors: Reducer<SectorsObj> = (state = SECTORS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_AND_ADD_SECTOR":
      const { sector } = action.payload

      if (!state.sectors) {
        return {
          ...state,
          sectors: [sector]
        }
      } else {
        return {
          ...state,
          sectors: [
            ...state.sectors,
            sector
          ]
        }
      }

    case "LOAD_SECTORS":
      const { sectors } = action.payload

      return {
        ...state,
        sectors
      }

    case "ADD_EDITED_SECTOR":
      const { sector: editedSector } = action.payload

      const editedSectors = state.sectors.map(sector => sector.id === editedSector.id ? editedSector : sector)

      return {
        ...state,
        sectors: editedSectors
      }

    default:
      return state;
  }

}

export default sectors