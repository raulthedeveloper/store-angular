import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/DataInterfaces';
import { GetService } from 'src/app/services/get/get.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.scss']
})
export class AdminCustomersComponent implements OnInit {

  data:any[] = [];


  constructor(private getService:GetService, private postService:PostService) { }

  ngOnInit(): void {
    this.getService.getCustomers().subscribe((customers) =>(this.data = customers))
  }

 

  addCustomer(customers:Customer){
    this.postService.addCustomer(customers).subscribe(() => (this.ngOnInit()))


  }


}
