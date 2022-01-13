import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() id:number | undefined;
  @Input() name:string | undefined;
  @Input() description:string | undefined;
  @Input() image:string | undefined;
  @Input() price:string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
