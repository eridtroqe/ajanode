import { Component, OnInit, Input } from '@angular/core';
import { faBath } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-element',
  templateUrl: './info-element.component.html',
  styleUrls: ['./info-element.component.scss']
})
export class InfoElementComponent implements OnInit {

  @Input() icon = faBath;
  @Input() label = 'label';
  @Input() value = 'vlera';
  constructor() { }

  ngOnInit() {
  }

}
