import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category, Product } from 'src/app/DataInterfaces';
import { GetService } from "../../../services/get/get.service"


interface category{
  name:string,
  description:string,
  image:string
}

interface product{
  catId:any,
  name:string,
  description:string,
  image:string,
  price:any,
  quantity:number
}


@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  
})
export class PostModalComponent   {
  constructor(private getService: GetService){}
@Output() onAddCategory: EventEmitter<Category> = new EventEmitter();
@Output() onAddProduct: EventEmitter<Product> = new EventEmitter();
  
  categoryId:any;
  name:string | undefined;
  description:string | undefined;
  image:string | undefined;
  price: any;
  quantity : any

 
  @Input() category:Category[] | undefined;
  @Input() title: string | undefined;
  @Input() type: string | undefined;
  @Input() edit: boolean | undefined;


  showModal:boolean = false;

  toggleModal():void{
    this.showModal = !this.showModal;
    if(this.type == 'product'){

      this.getService.getProducts().subscribe();
    }
    else{
      this.getService.getCategories().subscribe();
    }
    
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
      catId: parseInt(this.categoryId),
      name:this.name,
      description:this.description,
      image: this.image,
      price: parseInt(this.price),
      quantity:parseInt(this.quantity)
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
