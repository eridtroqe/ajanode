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
    loop: false,
    mouseDrag: false,
    center: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    touchDrag: true,
    pullDrag: false,
    stagePadding: 5,
    dots: true,
    margin: 10,
    navSpeed: 700,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
        // stagePadding: 10,
        margin: 10
      },
      400: {
        items: 2,
        // stagePadding: 10,
        margin: 10
      },
      740: {
        items: 3,
        margin: 10
      },
      1024: {
        items: 4,
        margin: 10
      },
      1440: {
        items: 4
      },
      2500: {
        items: 4,
        margin: 100,
        stagePadding: 300,

      }
    }
  }

 @Input() exclusiveProp: Array<Post>;
  constructor() { }

  ngOnInit() {
  }

}
