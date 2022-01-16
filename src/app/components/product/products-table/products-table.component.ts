import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Category, Product } from 'src/app/DataInterfaces';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {


    products:Product[] = []
  
    constructor(private dataService: DataService) { }
  
    ngOnInit(): void {

      //this.products = this.dataService.getProducts();
      this.dataService.getProducts().subscribe((product) =>(this.products = product));
      console.log(this.dataService.getCategories())
    }

}
