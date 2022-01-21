import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Category } from 'src/app/DataInterfaces';
import { DeleteService } from 'src/app/services/delete/delete.service';


@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {
  @Output() onRefreshList: EventEmitter<Category> = new EventEmitter();

  @Input() category:Category[] = []

  constructor(private deleteService: DeleteService) { }

  ngOnInit(): void {
   
    
  }
  
   delete(id:any){
    let choice = window.confirm("Are you sure you want to delete this product");

    if(choice){
     this.deleteService.deleteCategory(id).subscribe();
     this.onRefreshList.emit();
    }
    
    
   }

   

   edit(id:any){
     console.log(`The id of the category is ${id}`)
   }
}
