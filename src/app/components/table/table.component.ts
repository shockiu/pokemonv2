import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiPokemonService } from '../../services/api-pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements  OnInit, AfterViewInit{

  public pokemonList: any[] = [];
  public pokemonInfo: any;
  public displayResponsive: boolean = false;

  constructor(
    private apiPokemon: ApiPokemonService
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.getListPokemon();
  }

  getListPokemon() {
    this.apiPokemon.getListAllPokemon().subscribe((res: any) => {
      this.pokemonList = res
    })
  }

  idPokemon(idPokemon: number) {
    this.displayResponsive = false;
    this.apiPokemon.getOnePokemon(idPokemon)
      .subscribe((pokemon) => {
        this.pokemonInfo = pokemon;
        this.displayResponsive = true;
      })
  }

}
