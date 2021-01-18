import { LocationsService } from './../../services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations = [];

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe((result: any[]) => {
      console.log(result);

      this.locations = result;
    });
  }

}
