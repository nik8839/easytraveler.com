import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Destination } from '../../models/destination';

@Component({
  selector: 'app-showdestination',
  templateUrl: './showdestination.component.html',
  styleUrls: ['./showdestination.component.scss']
})
export class ShowdestinationComponent {
  destination!: Destination;
  constructor(private api: ApiService) {
    this.api.getDestinationDetails().subscribe((data: any) => {
      this.destination = data;
      console.log("destinationd: ", this.destination);
    });
  }
}
