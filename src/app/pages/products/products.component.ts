import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/DataInterfaces';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products:Product[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.dataService.getProducts().subscribe((product) =>(this.products = product));
  }

  refreshList(): void {
    this.dataService.getProducts().subscribe(() =>(this.ngOnInit()));
  }

  addProduct(product:Product){
    console.log(product);
    this.dataService.addProduct(product).subscribe(() => (this.ngOnInit()))
  }

}
