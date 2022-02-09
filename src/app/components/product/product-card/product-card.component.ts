import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() id:string | number | undefined;
  @Input() name:string | undefined;
  @Input() description:string | undefined;
  @Input() image:string | undefined;
  @Input() price:string | undefined;
  @Input() catId:string | undefined;
  
  public href: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    

    
  }

  ngOnChanges()	{
    if(!this.router.url.includes(String(this.catId))){
      this.href = `${this.catId}/${this.id}`
    }
    else{
      this.href = `${this.id}`
    }
  }



}
