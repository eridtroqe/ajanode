import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/auth.iterface';

@Component({
  selector: 'app-card-real-estate',
  templateUrl: './card-real-estate.component.html',
  styleUrls: ['./card-real-estate.component.scss']
})
export class CardRealEstateComponent implements OnInit {

  @Input() property: Post;
  constructor() { }

  ngOnInit() {
  }

}
