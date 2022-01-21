import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,Category } from 'src/app/DataInterfaces';
import { GetService } from 'src/app/services/get/get.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products:Product[] = [];
  category:Category[] = [];
  constructor(private route:ActivatedRoute, private getService: GetService) { }

  ngOnInit(): void {
    this.getService.getProducts().subscribe((product) =>(this.products = product));
    this.getService.getCategories().subscribe((category) =>(this.category = category));

  }


}
