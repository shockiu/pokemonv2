import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env} from '../../environments/environment'
import {Observable, Subject} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  emitAlphabetPokemon = new Subject();


  constructor(
    private  http: HttpClient
  ) { }

  private getInfoApi(path: string): Observable<any> {
    return this.http.get(`${env.urlApi}${path}`);
  }

  getListAllPokemon() {
    return this.getInfoApi('pokemon/?limit=1279')
      .pipe(map(res =>{
        const response = [...res.results];
        const order = res.results.sort((a: any, b: any) => a.name.localeCompare(b.name))
        const alphabet = order.reduce((accum: any, current: any) => {
          const letter = current.name.slice(0, 1);
          if (accum[letter]) {
            accum[letter] =  accum[letter] + 1;
          } else {
            accum[letter] = 1
          }
          return accum
        }, {});
        this.emitAlphabetPokemon.next(alphabet)
        return response;
      }));
  }

  getOnePokemon(id: number) {
    return this.getInfoApi(`pokemon/${id}`)
  }
}
