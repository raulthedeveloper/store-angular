import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Product } from 'src/app/DataInterfaces';
import { DeleteService } from 'src/app/services/delete/delete.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  @Output() onRefreshList: EventEmitter<Product> = new EventEmitter();


    @Input()
  products!: Product[]; 
    
  
    constructor(private deleteService: DeleteService) { }
  
     ngOnInit(): void {
 
      
    }

    edit(id:any): void{
      
      console.log('edit was activated')
    }

    delete(id:any): void{
     let choice = window.confirm("Are you sure you want to delete this product");

     if(choice){
      this.deleteService.deleteProduct(id).subscribe();
      this.onRefreshList.emit();
     }
    
    }

}
