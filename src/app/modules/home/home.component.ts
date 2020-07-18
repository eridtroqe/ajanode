import { Component, OnInit, HostListener } from '@angular/core';
import { faHome, faHandHoldingUsd, faMapMarkedAlt, faAt, faLock, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faHome = faHome;
  faHandHoldingUsd = faHandHoldingUsd;
  faMapMarkedAlt = faMapMarkedAlt;
  faEnvira = faEnvira;
  faAt = faAt;
  faLock = faLock;
  faHandsHelping = faHandsHelping;
  constructor() {}

  ngOnInit() {}
}
