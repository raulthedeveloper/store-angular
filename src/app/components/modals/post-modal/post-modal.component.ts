import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category, Product, Customer, Sale } from 'src/app/DataInterfaces';
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
@Output() onAddCustomer: EventEmitter<Customer> = new EventEmitter();
@Output() onAddSale: EventEmitter<Sale> = new EventEmitter();
@Output() onAddLocation: EventEmitter<Location> = new EventEmitter();



  
  categoryId:any;
  firstName:string | undefined;
  lastName:string | undefined;

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
    

    switch(this.type){
      case "product":
        this.getService.getProducts().subscribe();
        break;
      case "category":
        this.getService.getCategories().subscribe();
        break;
      case "sale":
        this.getService.getSales().subscribe();
        break;
      case "customer":
          this.getService.getCustomers().subscribe();
          break;
       case "location":
            this.getService.getLocations().subscribe();
            break;
       
    }
    
  }

  // toggleModal():void{
  //   this.showModal = !this.showModal;
  //   if(this.type == 'product'){

  //     this.getService.getProducts().subscribe();
  //   }
  //   else{
  //     this.getService.getCategories().subscribe();
  //   }
    
  // }

  submitForm():void{

    

    if(!this.name || !this.description || !this.image || !this.firstName || !this.lastName){
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

    const newCustomer:Customer = {
      first_name:this.firstName,
      last_name:this.lastName
    }

   

    switch(this.type){
      case "product":
        this.onAddCategory.emit(newProduct);
        break;
      case "category":
        this.onAddCategory.emit(newCategory)
        break;
      
      case "customer":
        this.onAddCustomer.emit(newCustomer)
          break;
       
        
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
