import * as authState from './reducers/auth.reducer';
import * as propertyState from './reducers/property.reducer';
import * as blogState from './reducers/blog.reducer';


export interface AppState {
    authState: authState.State;
    propertyState: propertyState.State;
    blogState: blogState.State;
}

export const reducers = {
 auth: authState.reducer,
 property: propertyState.reducer,
 blog: blogState.reducer
}
