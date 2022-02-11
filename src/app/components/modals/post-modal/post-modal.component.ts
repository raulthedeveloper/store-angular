import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category, Product, Customer, Sale, UnitedStates } from 'src/app/DataInterfaces';
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

  address:string | undefined;
  city:string | undefined;
  state:string | undefined;
  postalCode:string | number | undefined;

  unitedState:UnitedStates[] | undefined

 
  @Input() category:Category[] | undefined;
  @Input() title: string | undefined;
  @Input() type: string | undefined;
  @Input() edit: boolean | undefined;


  showModal:boolean = false;


  ngOnInit(): void {
    
     this.getService.getUnitedState().subscribe((data) =>(this.unitedState = data))

  }

  toggleModal():void{
    this.showModal = !this.showModal;
    


    
  }

 

  submitForm():void{

    
    // Prevent empty fields
    

   

    switch(this.type){
      case "product":
        const newProduct:any = {
          catId: parseInt(this.categoryId),
          name:this.name,
          description:this.description,
          image: this.image,
          price: parseInt(this.price),
          quantity:parseInt(this.quantity)
        }
        this.onAddProduct.emit(newProduct);
        break;
      case "category":
        const newCategory:any = {
          name: this.name,
          description:this.description,
          image: this.image
          
        }
        this.onAddCategory.emit(newCategory)
        break;
      
      case "customer":
        const newCustomer:Customer = {
          first_name:this.firstName,
          last_name:this.lastName
        }
        this.onAddCustomer.emit(newCustomer)
          break;

          case "location":
            const newLocation:any = {
              address:this.address,
              city:this.city,
              state:this.state,
              postalCode:Number(this.postalCode)
            }
            console.log(newLocation)
             this.onAddLocation.emit(newLocation)
              break;
        
    }
    

    

    
    
  }

  clearFields():void{
    this.firstName=""
    this.lastName=""
    this.name=""
    this.description=""
    this.image=""
    this.price=""
    this.quantity =""
  }

  
}
