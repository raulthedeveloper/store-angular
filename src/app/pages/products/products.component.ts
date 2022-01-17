import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/DataInterfaces';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  product:Product[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   
  }

  addProduct(product:Product){
    console.log(product);
    this.dataService.addProduct(product).subscribe((product) => (this.product.push()))
  }

}
