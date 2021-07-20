import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {

  event = {
    id:1,
    name: 'Angular Connect',
    date:'07/20/21',
    time:'15:37 pm',
    price: 599.99,
    imageUrl: '../images/',
    location:{
      address: '2450 B Zone 9',
      city: 'Meadowlands Soweto 1852',
      country: 'South Africa'
    }
  }

}
