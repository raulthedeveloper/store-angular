import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';


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

  constructor(private router: Router, private cartServices:CartServiceService) { }

  ngOnInit(): void {



  }

  addToCart(){
    this.cartServices.addToCart({userId:1,prodId:this.id,name:this.name,image:this.image,price:this.price,quantity:1})
    alert(`${this.name} was added to cart`)
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
