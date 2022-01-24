import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get/get.service';


@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.scss']
})
export class AdminSalesComponent implements OnInit {

  constructor(public getService: GetService) { }

  data:any[] = []

  ngOnInit(): void {
    this.getService.getSales().subscribe((customers) =>(this.data = customers))

  }

}
