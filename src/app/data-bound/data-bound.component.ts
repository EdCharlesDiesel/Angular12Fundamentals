import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bound',
  templateUrl: './data-bound.component.html',
  styleUrls: ['./data-bound.component.scss']
})
export class DataBoundComponent implements OnInit {

  data = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    location:
    {
      address: '123 Main St',
      city: 'Salt Lake City, UT',
      country: 'USA'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
