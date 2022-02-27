import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }


  cartData:any = []

  addToCart(item:any){

    if(!this.checkforDuplicates(item)){
      item.total = Number(item.price);
      this.cartData.push(item)

      this.copyTo()
    }
    else{
      // This is where we add to the quantity
      this.cartData.forEach((element:any) => {
        if(element.prodId == item.prodId){

          element.quantity += 1;
          element.total += Number(item.price)
        }

        this.copyTo()
      });
    }

  }

  checkforDuplicates(item:any):boolean{
    return this.cartData.some((obj:any) => obj.prodId === item.prodId)
  }


  updateFromCart(data:any)
  {

    localStorage.setItem('cart', JSON.stringify(data))
    this.loadCartData()
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
