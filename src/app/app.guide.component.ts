import { Component, Input } from '@angular/core';

@Component({
  selector: 'guide',
  templateUrl: 'app/guide.component.html',
})
export class AppComponent  { @Input() guide; }
