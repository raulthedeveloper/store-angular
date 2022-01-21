import { Component, OnInit } from '@angular/core';
import { Product,Category } from 'src/app/DataInterfaces';
import { GetService } from 'src/app/services/get/get.service';
import { PostService } from 'src/app/services/post/post.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products:Product[] = [];
  category:Category[] = [];
  constructor(private getService: GetService, private postService: PostService) { }

  ngOnInit(): void {
   this.getService.getProducts().subscribe((product) =>(this.products = product));
   this.getService.getCategories().subscribe((category) =>(this.category = category));

  }

  refreshList(): void {
    this.getService.getProducts().subscribe(() =>(this.ngOnInit()));
  }

  addProduct(product:Product){
    console.log(product);
    this.postService.addProduct(product).subscribe(() => (this.ngOnInit()))
  }

}
