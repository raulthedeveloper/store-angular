import { Component, OnInit } from '@angular/core';
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
  }

  addCategory(category:Category){
    console.log(category);
    this.dataService.addCategory(category).subscribe((category) => (this.category.push()))
  }
}
