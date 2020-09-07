import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { setQuery, getPropertiesRequest } from 'src/app/store/actions/property.actions';
import { startWith, map } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { cities, SearchQuery } from 'src/app/model/auth.iterface';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getSearchQuery } from 'src/app/store/reducers/property.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  filteredOptions: Observable<string[]>;
  cities: Array<string> = cities;
  form: FormGroup;
  query: SearchQuery;
  querySub: Subscription;

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

    if (!this.form.dirty) {
      return;
    }
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
  }
}
