import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { LocationsComponent } from './components/locations/locations.component';


const routes: Routes = [
  {
    component: LocationsComponent,
    path: ""
  },
  {
    component: LocationDetailsComponent,
    path: "details/:id"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
