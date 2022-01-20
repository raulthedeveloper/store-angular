import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.scss']
})
export class AdminCustomersComponent implements OnInit {

  data:any = [];
  

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe((customers) =>(this.data = customers))
  }

 

}
