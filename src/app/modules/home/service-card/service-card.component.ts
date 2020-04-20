import { Component, OnInit, Input } from '@angular/core';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input()
  icon = faFacebook;
  @Input()
  title: string='title';
  constructor() { }

  ngOnInit() {
  }

}
