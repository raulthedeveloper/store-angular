import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/DataInterfaces';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products:Product[] = [];
  constructor(private route:ActivatedRoute, private dataService: DataService ) { }

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
  }


}
