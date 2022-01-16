import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Category, Product } from 'src/app/DataInterfaces';


@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {
  category:Category[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((category) =>(this.category = category));
    console.log(this.dataService.getCategories())
  }

}
