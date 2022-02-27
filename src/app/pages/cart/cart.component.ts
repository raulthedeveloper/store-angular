import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   cartContents:any


  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.cartContents = this.cartService.cartData
    this.grossTotal();



  }


  ngOnChange():void{

  }

 

  incrementQuantity(id:number){

      let index = this.cartContents.findIndex((o:any) => {
        return id == o.prodId ;
       })
       if(this.cartContents[index].quantity <= 50){
        this.cartContents[index].quantity += 1
       }

       this.singleItemTotal(this.cartContents[index],this.cartContents[index].quantity,this.cartContents[index].price)

       this.cartService.updateFromCart(this.cartContents);

  }

  decrementQuantity(id:number){
    let index = this.cartContents.findIndex((o:any) => {
      return id == o.prodId ;
     })
     if(this.cartContents[index].quantity > 0){
        this.cartContents[index].quantity -= 1
     }

     this.singleItemTotal(this.cartContents[index],this.cartContents[index].quantity,this.cartContents[index].price)
    this.cartService.updateFromCart(this.cartContents);
  }

  removeItem(id:number){
    let total = this.grossTotal();
    let index = this.cartContents.findIndex((o:any) => {
      return id == o.prodId ;
     })

     if(index !== -1) {
      total - Number(this.cartContents[index].total)
       this.cartContents.splice(index,1)
     }
     this.cartService.updateFromCart(this.cartContents);

  }




  singleItemTotal(item:any,quantity:number,price:number){
    item.total = quantity * price
  }

  numberOfItems(){

    // add logic for quantity in objects
    return this.cartContents.length;
  }

  grossTotal(){
    // Calculates total of all items
    let sum = 0;
    this.cartContents.forEach((e:any) => {

      // add condition that check for item quantity too
      sum += Number(e.total);
    });
    return sum;
  }

}

