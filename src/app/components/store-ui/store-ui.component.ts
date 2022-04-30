import { Component, OnInit,Input} from '@angular/core';
import { Product } from 'src/app/DataInterfaces';

@Component({
  selector: 'app-store-ui',
  templateUrl: './store-ui.component.html',
  styleUrls: ['./store-ui.component.scss']
})
export class StoreUiComponent implements OnInit {
 @Input() products:any[] = []
 @Input() categories:any[] = []
 @Input() title:string | undefined;
 @Input() CategoryPage:boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }



}
