import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get/get.service';
import { Category } from 'src/app/DataInterfaces';

@Component({
  selector: 'app-category-ui',
  templateUrl: './category-ui.component.html',
  styleUrls: ['./category-ui.component.scss']
})
export class CategoryUiComponent implements OnInit {
  categories: Category[] = [];
  constructor(private getService: GetService) { }

  ngOnInit(): void {
    this.getService.getCategories().subscribe((category) =>(this.categories = category));

  }

}
