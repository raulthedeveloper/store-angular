import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category, Product } from 'src/app/DataInterfaces';
import {FormControl} from '@angular/forms';

interface category{
  name:string,
  description:string,
  image:string
}

interface product{
  categoryId:number | string | undefined,
  name:string,
  description:string,
  image:string,
  price:number | string | undefined
}


@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  
})
export class PostModalComponent   {
@Output() onAddCategory: EventEmitter<Category> = new EventEmitter();
@Output() onAddProduct: EventEmitter<Product> = new EventEmitter();

  categoryId:number |string | undefined;
  name:string | undefined;
  description:string | undefined;
  image:string | undefined;
  price: number | string | undefined;
  
  @Input() title: string | undefined;
  @Input() type: string | undefined;
  @Input() edit: boolean | undefined;


  showModal:boolean = false;

  toggleModal():void{
    this.showModal = !this.showModal;
  }

  

  submitForm():void{

    

    if(!this.name || !this.description || !this.image){
      alert("Please make sure all fields are filled out")
      return 
    }

   

    const newCategory:category = {
      name: this.name,
      description:this.description,
      image: this.image
      
    }

    const newProduct:product = {
      categoryId: this.categoryId,
      name:this.name,
      description:this.description,
      image: this.image,
      price:this.price
    }

    if(this.type == "category"){
      this.onAddCategory.emit(newCategory)
    }
    else{
      this.onAddProduct.emit(newProduct)
    }
    

    this.name = "";
    this.description = "";
    this.image = "";

    if(this.type == "product"){
      this.categoryId = ""
      this.price = ""
    }
    
  }

  
}
