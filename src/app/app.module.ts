import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ShowdestinationComponent } from './pages/showdestination/showdestination.component';
import { HotelslistComponent } from './pages/hotelslist/hotelslist.component';
import { DestinationdetailsComponent } from './pages/destinationdetails/destinationdetails.component';
import { HistoricalplaceComponent } from './pages/historicalplace/historicalplace.component';
import { CulturalplacesComponent } from './pages/culturalplaces/culturalplaces.component';
import { CuisineComponent } from './pages/cuisine/cuisine.component';
import { EventsComponent } from './pages/events/events.component';
import { ItineraryComponent } from './pages/itinerary/itinerary.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShowdestinationComponent,
    HotelslistComponent,
    DestinationdetailsComponent,
    HistoricalplaceComponent,
    CulturalplacesComponent,
    CuisineComponent,
    EventsComponent,
    ItineraryComponent,
    ContactusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
