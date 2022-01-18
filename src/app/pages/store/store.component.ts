import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Product,Category } from 'src/app/DataInterfaces';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products:Product[] = [];
  category:Category[] = [];
  constructor(private route:ActivatedRoute, private dataService: DataService ) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((product) =>(this.products = product));
    this.dataService.getCategories().subscribe((category) =>(this.category = category));

  }


}
