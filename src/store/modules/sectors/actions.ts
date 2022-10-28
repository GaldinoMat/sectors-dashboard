import { Sector } from './../../../typings/types';

export function createSector(sector: Sector) {
  return {
    type: "CREATE_AND_ADD_SECTOR",
    payload: {
      sector
    }
  }
}

export function addEditedSector(sector: Sector) {
  return {
    type: "ADD_EDITED_SECTOR",
    payload: {
      sector
    }
  }
}

export function postSector(sector: Sector) {
  return {
    type: "CREATE_AND_POST_SECTOR",
    request: {
      url: "/",
      method: 'post',
      data: sector
    }
  }
}

export function deleteSector(id: number) {
  return {
    type: "DELETE_SECTOR",
    request: {
      url: `/${id}`,
      method: 'delete',
      data: {
        id
      }
    }
  }
}

export function loadSectors(sectors: Sector[]) {
  return {
    type: "LOAD_SECTORS",
    payload: {
      sectors
    }
  }
}

export function fetchSectors() {
  return {
    type: "FETCH_SECTORS",
    request: {
      url: "/",
      method: 'get'
    },
    data: []
  }
}
