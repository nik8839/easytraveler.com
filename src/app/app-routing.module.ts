import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ShowdestinationComponent } from './pages/showdestination/showdestination.component';
import { DestinationdetailsComponent } from './pages/destinationdetails/destinationdetails.component';
import { HistoricalplaceComponent } from './pages/historicalplace/historicalplace.component';
import { CuisineComponent } from './pages/cuisine/cuisine.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'showdestination', component: ShowdestinationComponent },
  { path: 'destinationdetails', component: DestinationdetailsComponent },
  { path: 'historicalplace', component: HistoricalplaceComponent },
  { path: 'cuisine', component: CuisineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
