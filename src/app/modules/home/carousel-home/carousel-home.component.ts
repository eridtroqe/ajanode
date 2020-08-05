import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
        items: 1,
        stagePadding: 10,
        margin: 10
      },
      740: {
        items: 2
      },
      1024: {
        items: 3
      },
      1440: {
        items: 4
      },
      2550: {
        items: 6
      }
    }
  }

 @Input() properties: Array<Post>;
//  [
//     {
//       imagePath: [
//         'http://localhost:3000/images/aja-1.jpg-1595796068064.jpg'
//       ],
//       _id: '5f1dea64ef89a845c024ed33',
//       title: 'test 2',
//       description: 'sdvdfvdgbfgbfg',
//       address: 'sdckpoj',
//       sip: '60',
//       typology: '1+1',
//       rooms: '1',
//       toilets: '1',
//       floor: '5',
//       type: 'Rent',
//       price: '250',
//       date: '2020-07-26T20:41:08.072Z',
//     },
//     {
//       imagePath: [
//         'http://localhost:3000/images/wallpaper.jpg-1595795032589.jpg'
//       ],
//       _id: '5f1de658198c72479807b887',
//       title: 'Test',
//       description: 'sdckljsdfiojaosdc\ndvdfv;ldsfvd\nfvdfpvmd[fv\ndf,vmdpfov\n',
//       address: 'adrea',
//       sip: '50',
//       typology: '1+1',
//       rooms: '1',
//       toilets: '1',
//       floor: '5',
//       type: 'Rent',
//       price: '150',
//       date: '2020-07-26T20:23:52.612Z',
//     }
//   ];

  constructor() { }

  ngOnInit() {
  }

}
