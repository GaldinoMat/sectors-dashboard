import { Reducer } from "redux"
import type { Sector } from '../../../typings/types';

const SECTORS_INITIAL_STATE: Sector = {
  id: 0,
  sectorName: "",
  roles: []
}

const sector: Reducer<Sector> = (state = SECTORS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "EDIT_SECTOR":
      const { sector } = action.payload

      return {
        ...state,
        ...sector
      }

    default:
      return state;
  }

}

export default sector