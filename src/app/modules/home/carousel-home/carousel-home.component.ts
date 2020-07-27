import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Post } from 'src/app/model/auth.iterface';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss']
})
export class CarouselHomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 15,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
    rewind: true
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
