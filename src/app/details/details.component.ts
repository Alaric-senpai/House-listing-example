import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <article>
      <img [src]="housingLocation?.photo" alt="" class="listing-photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Is wifi available: {{ housingLocation?.wifi }}</li>
          <li>Is laundry service available: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyform" (ngSubmit)="submitApplication()">
          <label for="firstname">Firstname</label>
          <input type="text" id="firstname" formControlName="firstname">
          <label for="lastname">Lastname</label>
          <input type="text" id="lastname" formControlName="lastname">
          <label for="email">Email</label>
          <input type="email" id="email" formControlName="email">
          <button type="submit" class="primary">Submit</button>
        </form>
      </section>
      </article>
      <section class="w3-panel">
        <a [routerLink]="['/home']" class="w3-button w3-deep-purple">Go back</a>
      </section>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication() {
    if (this.applyform.valid) {
      this.housingService.submitApplication(
        this.applyform.value.firstname ?? '',
        this.applyform.value.lastname ?? '',
        this.applyform.value.email ?? ''
      );
    }
  }
}
