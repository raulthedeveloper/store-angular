import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { PostService } from 'src/app/services/post/post.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   cartContents:any


  constructor(private cartService:CartServiceService, private postService:PostService,private router: Router, private route: ActivatedRoute) { }

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


  submitCart(){
    // Post service to do so
    // remove all unnecessary properties before submit
    // Creates a copy of the state without effecting the state when props are deleted
    const cart = JSON.parse(JSON.stringify( this.cartContents ));


    cart.forEach((element:any) => {
      delete element.name
      delete element.price
      delete element.total
      delete element.image
    });

    if(confirm("Are you ready to check out?")){
      this.postService.addCart(cart).subscribe(()=>{
        this.cartService.updateFromCart(this.cartContents = []);
        alert("Transaction Complete")

        // Reroute to order summary page
        this.router.navigate([`../order-summary/22323`], { relativeTo: this.route });
      })
    }

    // Submit new object to post request


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

