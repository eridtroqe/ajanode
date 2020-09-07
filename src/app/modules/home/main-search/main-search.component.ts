import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { cities, SearchQuery } from "../../../model/auth.iterface";
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { getPropertiesRequest, setQuery } from 'src/app/store/actions/property.actions';
import { Router } from '@angular/router';
import { getSearchQuery } from 'src/app/store/reducers/property.reducer';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit, OnDestroy {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  filteredOptions: Observable<string[]>;
  cities: Array<string> = cities;
  form: FormGroup;
  querySub: Subscription;
  query: SearchQuery;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private fb: FormBuilder) { }
  ngOnDestroy(): void {
   this.querySub.unsubscribe();
  }

  ngOnInit() {

    this.querySub = this.store.select(getSearchQuery).subscribe(val => this.query = val);

    this.form = this.fb.group({
      search: this.query.search,
      city: this.query.city,
      property_type: this.query.property_type,
      typology: this.query.typology,
      type: this.query.type,
      minSip: this.query.minSip,
      maxSip: this.query.maxSip,
      minPrice: this.query.minPrice,
      maxPrice: this.query.maxPrice
    });

    this.filteredOptions = this.form.get('city').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(option => option.toLowerCase().includes(filterValue));
  }
  onSubmit() {

    // if (!this.form.dirty) {
    //   return;
    // }
    this.store.dispatch(setQuery({
      searchQuery: {
        city: this.form.value.city,
        property_type: this.form.value.property_type,
        search: this.form.value.search,
        type: this.form.value.type,
        typology: this.form.value.typology,
        maxPrice: this.form.value.maxPrice,
        minPrice: this.form.value.minPrice,
        minSip: this.form.value.minSip,
        maxSip: this.form.value.maxSip
      }
    }));
    this.store.dispatch(getPropertiesRequest({ searchQuery: this.form.value, postsPerPage: 8, currentPage: 1 }));
    this.router.navigate(['real-estate']);
  }
}
