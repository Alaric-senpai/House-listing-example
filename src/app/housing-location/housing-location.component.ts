import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocation} from '../housinglocation';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing w3-card-4">
      <img 
      [src]="housingLocation.photo" 
      alt="exterior photo of {{housingLocation.name}}" 
      class="listing photo" 
      crossorigin
      >
      <h2 class="listing-heading">
        {{housingLocation.name}}
      </h2>
      <p class="listing-location">
        {{housingLocation.city}}, {{housingLocation.state}}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn more</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation; 
}
