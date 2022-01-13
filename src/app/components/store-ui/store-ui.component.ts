import { Component, OnInit,} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/DataInterfaces';

@Component({
  selector: 'app-store-ui',
  templateUrl: './store-ui.component.html',
  styleUrls: ['./store-ui.component.scss']
})
export class StoreUiComponent implements OnInit {
 products:Product[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
    console.log(this.dataService.getProducts())
  }

}
