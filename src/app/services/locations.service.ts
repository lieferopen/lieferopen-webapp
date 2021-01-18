import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private url = "https://hub.lieferopen.com/locations";

  private locations: any[] = [];

  constructor(private http: HttpClient) { }

  getLocations() {

    return this.http.get(this.url);
  }
}
