import { Component, OnInit } from '@angular/core';
import { Product,Category } from 'src/app/DataInterfaces';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products:Product[] = [];
  category:Category[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.dataService.getProducts().subscribe((product) =>(this.products = product));
   this.dataService.getCategories().subscribe((category) =>(this.category = category));

  }

  refreshList(): void {
    this.dataService.getProducts().subscribe(() =>(this.ngOnInit()));
  }

  addProduct(product:Product){
    console.log(product);
    this.dataService.addProduct(product).subscribe(() => (this.ngOnInit()))
  }

}
