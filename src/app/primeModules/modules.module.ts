import { NgModule } from '@angular/core';
import {TableModule} from "primeng/table";
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [],
  exports:[
    TableModule,
    ButtonModule,
    PaginatorModule
  ]
})
export class NgPrimeModule { }
