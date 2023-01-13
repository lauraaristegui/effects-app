import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api'
  constructor(private http: HttpClient) { }


  getUser(){
   return this.http.get(`${this.url}/users?page=2`)
   .pipe(
    map(resp => {
     return  resp['data'];
    })
   )
  }
}
