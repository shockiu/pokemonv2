import { NgModule } from '@angular/core';
import {TableModule} from "primeng/table";
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [],
  exports:[
    TableModule,
    ButtonModule,
    PaginatorModule,
    CardModule,
    ToolbarModule,
    ListboxModule
  ]
})
export class NgPrimeModule { }
