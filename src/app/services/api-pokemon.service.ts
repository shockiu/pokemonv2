import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env} from '../../environments/environment'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  constructor(
    private  http: HttpClient
  ) { }

  private getInfoApi(path: string): Observable<any> {
    return this.http.get(`${env.urlApi}${path}`);
  }

  getListAllPokemon() {
    return this.getInfoApi('pokemon/?limit=1279');
  }

  getOnePokemon(id: number) {
    return this.getInfoApi(`pokemon/${id}`)
  }
}
