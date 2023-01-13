import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import * as cargarUsuarioActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuarioActions.cargarUsuario),
            mergeMap((action) => this.usuarioService.getUserById(action.id).pipe(
            map(user => cargarUsuarioActions.cargarUsuarioSuccess({usuario: user})),
            catchError(err => of(cargarUsuarioActions.cargarUsuarioError({payload: err})))
            ))
        )
    )
    


}