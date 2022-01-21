import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from 'src/app/services/get/get.service';


@Component({
  selector: 'app-store-category',
  templateUrl: './store-category.component.html',
  styleUrls: ['./store-category.component.scss']
})
export class StoreCategoryComponent implements OnInit {

  public categoryRoute : any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryRoute = this.route.snapshot.paramMap.get('category');
    
  }


}
