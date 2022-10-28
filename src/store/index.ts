import { combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux'
import { EditRolesType, RolesType, SectorsObj, Warning } from '../typings/types'
import sectors from './modules/sectors/reducer'
import roles from './modules/roles/reducer'
import warnings from './modules/warning/reducer';
import sector from './modules/editSector/resolver';
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios'
import axios from 'axios';

export interface IStateType {
  sectors: SectorsObj
  roles: RolesType
  warnings: Warning
  sector: {
    id: number;
    sectorName: string;
    roles: string[];
  }
  editRoles: EditRolesType
}

const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(axios.create({
    baseURL: 'https://sea-solutions-test-server.herokuapp.com/sectors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })),
});

const reducers = combineReducers({
  sectors,
  roles,
  warnings,
  sector,
  requests: requestsReducer,
});


const store = createStore(reducers, applyMiddleware(...requestsMiddleware))

export default store