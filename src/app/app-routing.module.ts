import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowdestinationComponent } from './pages/showdestination/showdestination.component';
import { DestinationdetailsComponent } from './pages/destinationdetails/destinationdetails.component';
import { HistoricalplaceComponent } from './pages/historicalplace/historicalplace.component';
import { CuisineComponent } from './pages/cuisine/cuisine.component';
import { HotelslistComponent } from './pages/hotelslist/hotelslist.component';
import { ItineraryComponent } from './pages/itinerary/itinerary.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'showdestination', component: ShowdestinationComponent },
  { path: 'destinationdetails', component: DestinationdetailsComponent },
  { path: 'historicalplace', component: HistoricalplaceComponent },
  { path: 'cuisine', component: CuisineComponent },
  { path: 'hotelslist', component: HotelslistComponent },
  { path: 'itinerary', component: ItineraryComponent },
  { path: 'contactus', component: ContactusComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
