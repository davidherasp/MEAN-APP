import { Component, Input } from '@angular/core';

@Component({
  selector: 'detailGuide',
  templateUrl: 'app/detail.guide.component.html',
})
export class AppComponent  { @Input() detailGuide; }
