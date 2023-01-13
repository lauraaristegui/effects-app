import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UserState {
    id: string;
    user: Usuario; 
    loaded: boolean,
    loading: boolean,
    error: any
}

export const userInitialState: UserState = {
    id: null,
   user: null,
   loaded: false,
   loading: false,
   error: null

}

const _userReducer = createReducer(userInitialState,

    on(cargarUsuario, (state, {id}) => ({
        ...state, 
        loading: true,
        id: id
    })),

    on(cargarUsuarioSuccess, (state, { usuario }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        user: {...usuario}
    })),

    on(cargarUsuarioError, (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message:payload.message
        }
    })),
);


export function userReducer(state, action) {
    return _userReducer(state, action)
}
