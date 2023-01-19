import { NgModule } from '@angular/core';
import {TableModule} from "primeng/table";
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import { ListboxModule } from 'primeng/listbox';
import { DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [],
  exports:[
    TableModule,
    ButtonModule,
    PaginatorModule,
    CardModule,
    ToolbarModule,
    ListboxModule,
    DialogModule
  ]
})
export class NgPrimeModule { }
