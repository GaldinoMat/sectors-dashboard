export function addRole(role: string) {
  return {
    type: "ADD_ROLE_TO_ROLES",
    payload: {
      role
    }
  }
}

export function deleteRole(role:string) {
  return {
    type: "REMOVE_ROLE_FROM_ROLES",
    payload: {
      role
    }
  }
}

export function clearRoles() {
  return {
    type: "CLEAR_ROLES",
    payload: {}
  }
}

export function loadRoles(roles: string[]) {
  return {
    type: "LOAD_EDIT_ROLES",
    payload: {
      roles
    }
  }
}