import { Component, OnInit,Input} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/DataInterfaces';

@Component({
  selector: 'app-store-ui',
  templateUrl: './store-ui.component.html',
  styleUrls: ['./store-ui.component.scss']
})
export class StoreUiComponent implements OnInit {
 @Input() products:Product[] = []
 @Input() title:string | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   
  }

}
