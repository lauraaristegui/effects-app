import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';
import { filter, pipe } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(
    // public usuarioService: UsuarioService 
    private store: Store<AppState> 
  ) { }

  ngOnInit(): void {
    // this.usuarioService.getUser()
    // .subscribe(users => {
    //   this.usuarios = users;
    //   console.log(users, 'data'); 
    // });
    this.store.select('users').subscribe(({users, loading, error}) => {
      this.usuarios = users;   
      this.loading =  loading;
      this.error  = error   
    })
    this.store.dispatch(cargarUsuarios())
  }

}
