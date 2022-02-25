import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/DataInterfaces';
import { GetService } from 'src/app/services/get/get.service';
import { PostService } from 'src/app/services/post/post.service';
import { DeleteService } from 'src/app/services/delete/delete.service';


@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.scss']
})
export class AdminSalesComponent implements OnInit {

  constructor(public getService: GetService, private postService: PostService, private deleteService: DeleteService) { }

  data:any[] = []
  product:any[] | undefined;

  ngOnInit(): void {
    this.getService.getSales().subscribe((customers) =>(this.data = customers))
    this.getService.getProducts().subscribe((product) => (this.product = product))
  }

  deleteSale(id:number){
    this.deleteService.deleteSale(id).subscribe();
  }

  refreshTable(){
    this.ngOnInit();
  }


  addSale(sale:Sale){
    this.postService.addSales(sale).subscribe(() => (this.ngOnInit()))

  }

}
