import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { cities } from "../../../model/auth.iterface";
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { getPropertiesRequest, setQuery } from 'src/app/store/actions/property.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  filteredOptions: Observable<string[]>;
  cities: Array<string> = cities;
  form: FormGroup;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      search: '',
      city: '',
      property_type: '',
      typology: '',
      type: '',
      minSip: '',
      maxSip: '',
      minPrice: '',
      maxPrice: ''
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
        peoperty_type: this.form.value.property_type,
        search: this.form.value.search,
        type: this.form.value.type,
        typology: this.form.value.typology,
        maxPrice: this.form.value.maxPrice,
        minPrice: this.form.value.minPrice,
        minSip: this.form.value.minSip,
        maxSip: this.form.value.maxSip
      }
    }));
    this.router.navigate(['real-estate']);
  }
}
