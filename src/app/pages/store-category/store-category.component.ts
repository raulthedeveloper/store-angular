import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from 'src/app/services/get/get.service';
import { ProductByCat } from 'src/app/DataInterfaces';


@Component({
  selector: 'app-store-category',
  templateUrl: './store-category.component.html',
  styleUrls: ['./store-category.component.scss']
})
export class StoreCategoryComponent implements OnInit {

  public categoryRoute : any

  products:ProductByCat[] = [];


  constructor(private route: ActivatedRoute, private getService: GetService) { }

  ngOnInit(): void {
    this.getService.getProductsByCat(Number(this.route.snapshot.paramMap.get('category'))).subscribe((product) =>(this.products = product));

    this.categoryRoute = this.route.snapshot.paramMap.get('category');
    
  }

 
    
  


}
