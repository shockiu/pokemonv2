import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgPrimeModule } from './primeModules/modules.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { TableComponent } from './components/table/table.component';
import { StatsComponent } from './components/stats/stats.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    TableComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    NgPrimeModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
