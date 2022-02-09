import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from 'src/app/services/get/get.service';
import { Product } from '../../DataInterfaces'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:Product | undefined
  
  constructor(private route: ActivatedRoute,private getService:GetService) { }

  ngOnInit(): void {
    this.getService.getProductById(Number(this.route.snapshot.paramMap.get('id'))).subscribe((product) =>(this.product = product));
  }

}
