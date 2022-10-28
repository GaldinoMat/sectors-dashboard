import { Sector } from "../../../typings/types";

export function addSectorToEdit(sector: Sector) {
  return {
    type: "EDIT_SECTOR",
    payload: {
      sector
    }
  }
}

export function updateEditSector(sector: Sector) {
  return {
    type: "CREATE_AND_POST_SECTOR",
    request: {
      url: `sectors/${sector.id}`,
      method: 'patch',
      data: {
        id: sector.id,
        sectorName: sector.sectorName,
        roles: sector.roles
      }
    }
  }
}