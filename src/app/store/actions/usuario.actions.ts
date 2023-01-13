import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction(
    '[Usuario] cargar Usuario',
     props<{id: string}>()
);

export const cargarUsuarioSuccess = createAction('[Usuario] cargar Usuario Success', 
props<{usuario: Usuario}>()
);

export const cargarUsuarioError = createAction('[Usuario] cargar Usuario Error', 
props<{payload: any}>()
);