import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Post } from 'src/app/model/auth.iterface';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss']
})
export class CarouselHomeComponent implements OnInit {

  isDragging: boolean;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    touchDrag: true,
    pullDrag: false,
    stagePadding: 5,
    dots: true,
    // center: true,
    startPosition: 1,
    navSpeed: 700,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
        // stagePadding: 0,
        margin: 15
      },
      400: {
        items: 2,
        // stagePadding: 10,
        margin: 15
      },
      740: {
        items: 3,
        margin: 15
      },
      1024: {
        items: 4,
        margin: 15
      },
      1920: {
        items: 4,
        margin: 15
      },
      2500: {
        items: 6,
        margin: 30
      }
    }
  }

 @Input() properties: Array<Post>;

  constructor() { }

  ngOnInit() {
  }

}
