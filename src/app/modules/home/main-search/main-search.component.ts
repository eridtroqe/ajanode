import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { cities } from "../../../model/auth.iterface";
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

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
    private store: Store<AppState>,
    private fb: FormBuilder) {}

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
  onSubmit(){
    
  }
}
