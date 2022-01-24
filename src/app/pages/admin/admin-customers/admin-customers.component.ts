import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get/get.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.scss']
})
export class AdminCustomersComponent implements OnInit {

  data:any[] = [];
  

  constructor(private getService:GetService) { }

  ngOnInit(): void {
    this.getService.getCustomers().subscribe((customers) =>(this.data = customers))
  }

  ngAfterContentChecked(){
    console.log(this.data)
  }

 

}
