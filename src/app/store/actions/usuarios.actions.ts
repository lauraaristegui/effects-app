import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] cargar Usuarios');

export const cargarUsuariosSuccess = createAction('[Usuarios] cargar Usuarios Success', 
props<{usuarios: Usuario[]}>()
);

export const cargarUsuariosError = createAction('[Usuarios] cargar Usuarios Error', 
props<{payload: any}>()
);