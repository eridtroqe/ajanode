import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/auth.iterface';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-exclusive-carousel',
  templateUrl: './exclusive-carousel.component.html',
  styleUrls: ['./exclusive-carousel.component.scss']
})
export class ExclusiveCarouselComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    touchDrag: true,
    pullDrag: false,
    stagePadding: 5,
    dots: true,
    margin: 7,
    navSpeed: 700,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
        stagePadding: 10,
        margin: 10
      },
      400: {
        items: 2,
        stagePadding: 10,
        margin: 10
      },
      740: {
        items: 3
      },
      1024: {
        items: 4
      },
      1440: {
        items: 6
      }
    }
  }

 @Input() exclusiveProp: Array<Post>;
  constructor() { }

  ngOnInit() {
  }

}
