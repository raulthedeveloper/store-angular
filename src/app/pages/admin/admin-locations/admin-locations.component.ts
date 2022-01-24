import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get/get.service';

@Component({
  selector: 'app-admin-locations',
  templateUrl: './admin-locations.component.html',
  styleUrls: ['./admin-locations.component.scss']
})
export class AdminLocationsComponent implements OnInit {

  constructor(private getService: GetService) { }
  data:any[] = []

  ngOnInit(): void {
    this.getService.getLocations().subscribe((locations) =>(this.data = locations))
  }

}
