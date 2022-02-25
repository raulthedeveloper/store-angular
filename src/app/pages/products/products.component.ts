import { Component, OnInit } from '@angular/core';
import { Product,Category } from 'src/app/DataInterfaces';
import { GetService } from 'src/app/services/get/get.service';
import { PostService } from 'src/app/services/post/post.service';
import { DeleteService } from 'src/app/services/delete/delete.service';
import { PutService } from 'src/app/services/put/put.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  category:Category[] = [];

  constructor(private getService: GetService, private postService: PostService, private deleteService: DeleteService, private putService:PutService) { }

  ngOnInit(): void {
   this.getService.getProducts().subscribe((product) =>(this.products = product));
   this.getService.getCategories().subscribe((category) =>(this.category = category));

  }

  // refreshList(): void {
  //   this.getService.getProducts().subscribe(() =>(this.ngOnInit()));
  // }

  refreshTable(){
    this.ngOnInit();
  }


  addProduct(product:Product){
    this.postService.addProduct(product).subscribe(() => (this.ngOnInit()))
  }

  deleteProduct(id:number){
    this.deleteService.deleteProduct(id).subscribe();
  }

}
