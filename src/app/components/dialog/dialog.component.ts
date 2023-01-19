import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  @Input() displayResponsive: boolean = false;
  @Input() pokemonInfo: any;


}
