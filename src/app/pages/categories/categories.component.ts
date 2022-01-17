import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/DataInterfaces';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

 category:Category[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((category) =>(this.category = category));
  }

  addCategory(category:Category){
    this.dataService.addCategory(category).subscribe(() => (this.ngOnInit()))
    
    
  }

  refreshList(): void {
    console.log("refresh list is working")
    this.dataService.getCategories().subscribe(() =>(this.ngOnInit()));
  }
}
