export type SectorsObj = {
  sectors: Sector[]
}

export type Sector = {
  id: number
  sectorName: string;
  roles: string[];
}

export type RolesType = {
  roles: string[]
}

export type EditRolesType = {
  editRoles: string[]
}

export type RolesObj = {
  roles: RolesType
}

export type Warning = {
  warning: {
    isWarning: boolean,
    text: string
  }
}