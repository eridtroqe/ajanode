import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/model/auth.iterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() blog: Blog;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDetails(id: string) {
    this.router.navigateByUrl(`blog/${id}`);
  }

}
