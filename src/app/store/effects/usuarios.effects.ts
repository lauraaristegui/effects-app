import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import * as cargarUsuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuariosActions.cargarUsuarios),
            mergeMap(() => this.usuarioService.getUser().pipe(
            map(users => cargarUsuariosActions.cargarUsuariosSuccess({usuarios: users})),
            catchError(err => of(cargarUsuariosActions.cargarUsuariosError({payload: err})))
            ))
        )
    )
    


}