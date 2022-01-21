import { Component, OnInit,Input} from '@angular/core';
import { Product } from 'src/app/DataInterfaces';

@Component({
  selector: 'app-store-ui',
  templateUrl: './store-ui.component.html',
  styleUrls: ['./store-ui.component.scss']
})
export class StoreUiComponent implements OnInit {
 @Input() products:Product[] = []
 @Input() title:string | undefined;

  constructor() { }

  ngOnInit(): void {
   
  }

}
