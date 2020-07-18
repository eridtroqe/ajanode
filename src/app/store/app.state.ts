import * as authState from './reducers/auth.reducer';
import * as propertyState from './reducers/property.reducer';


export interface AppState {
    authState: authState.State;
    propertyState: propertyState.State;
}

export const reducers = {
 auth: authState.reducer,
 property: propertyState.reducer
}