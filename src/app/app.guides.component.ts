import { Component, Input } from '@angular/core';

@Component({
  selector: 'guides',
  templateUrl: 'app/guides.component.html',
})
export class AppComponent  { @Input() guides; }
