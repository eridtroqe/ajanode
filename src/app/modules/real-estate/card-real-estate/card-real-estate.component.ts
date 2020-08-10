import { Component, OnInit, Input } from '@angular/core';
import { Post, Mode } from '../../../model/auth.iterface';
import { Router } from '@angular/router';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { deletePropertyRequest, setUpdate } from 'src/app/store/actions/property.actions';
import { Observable } from 'rxjs';
import { getIsAuth } from 'src/app/store/reducers/auth.reducer';

@Component({
  selector: 'app-card-real-estate',
  templateUrl: './card-real-estate.component.html',
  styleUrls: ['./card-real-estate.component.scss']
})
export class CardRealEstateComponent implements OnInit {

  @Input() property: Post;
  url: string;

  isAuth$: Observable<boolean>;

  constructor(private router: Router, 
              private store: Store<AppState>) { }

  ngOnInit() {
    this.url = this.property.imagePath[0];
    this.isAuth$ = this.store.select(getIsAuth);
  }

  navigateToDetails(id: string) {
    this.router.navigateByUrl(`real-estate/${id}`);
  }

  deleteProperty(id: string){
  this.store.dispatch(deletePropertyRequest({id}));
  }

  gotToUpdate(){
     this.store.dispatch(setUpdate({payload: this.property, mode: Mode.Update}));
     this.router.navigate(['dashboard']);
  }
}
