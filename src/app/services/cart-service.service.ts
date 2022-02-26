import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  
  cartData:any = []

  addToCart(item:any){

    this.cartData.push(item)

    this.copyTo()
  }


  updateFromCart(data:any)
  {
    console.log("cart data updated")
    this.cartData = data

  }


  copyTo(){
    localStorage.setItem('cart', JSON.stringify(this.cartData))

  }


  clearCart(){
    localStorage.removeItem("cart");
  }

  removeItemFromCart(){
    // Filter item out of array and then push to local storage
  }



  loadCartData(){
    //loads data from local storage if exists
    this.cartData = [];
    var getJson = localStorage.getItem('cart')
    if(getJson){
        this.cartData =  JSON.parse(getJson)
  }

}

}
