import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Category } from 'src/app/DataInterfaces';

@Component({
  selector: 'app-category-ui',
  templateUrl: './category-ui.component.html',
  styleUrls: ['./category-ui.component.scss']
})
export class CategoryUiComponent implements OnInit {
  categories: Category[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((category) =>(this.categories = category));

  }

}
