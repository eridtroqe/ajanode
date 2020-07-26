import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/auth.iterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-real-estate',
  templateUrl: './card-real-estate.component.html',
  styleUrls: ['./card-real-estate.component.scss']
})
export class CardRealEstateComponent implements OnInit {

  @Input() property: Post;
  url: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.url = this.property.imagePath[0];
  }

  navigateToDetails(id: string) {
    this.router.navigateByUrl(`real-estate/${id}`);
  }

}
