import { Component, OnInit, Output, EventEmitter, Input,ChangeDetectorRef } from '@angular/core';
import { Category, Product, Customer, Sale, UnitedStates } from 'src/app/DataInterfaces';
import { PutService } from 'src/app/services/put/put.service';
import { GetService } from "../../../services/get/get.service"
import {StateSharingService} from "../../../services/state-sharing.service"





@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',

})
export class PostModalComponent   {
  constructor(private cdr: ChangeDetectorRef,private getService: GetService,private stateSharing:StateSharingService, private putService: PutService){}
@Output() onAddCategory: EventEmitter<Category> = new EventEmitter();
@Output() onAddProduct: EventEmitter<Product> = new EventEmitter();
@Output() onAddCustomer: EventEmitter<Customer> = new EventEmitter();
@Output() onAddSale: EventEmitter<Sale> = new EventEmitter();
@Output() onAddLocation: EventEmitter<Location> = new EventEmitter();

@Output() onRefreshTable: EventEmitter<any> = new EventEmitter();

  id:number | string | undefined;


  categoryId:any;
  prodId:any;
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

  @Input() product:Product[] | undefined;

  @Input() category:Category[] | undefined;

  @Input() title: string | undefined;
  @Input() type: string | undefined;



  edit: boolean | undefined;


  editData: any;

  showModal:boolean = false;



  ngOnInit(): void {

    // Toggles edit (boolean) for layout use
    this.stateSharing.currentToggle.subscribe(toggle => this.showModal = toggle)

      //
    this.stateSharing.currentEdit.subscribe(edit => this.edit = edit)

     this.getService.getUnitedState().subscribe((data) =>(this.unitedState = data))



  }



  ngAfterViewInit(){
    this.cdr.detectChanges();


  this.stateSharing.currentData.subscribe(data => {
    if(this.edit){
      switch(this.type){
        case 'category':
          this.id = Number(data.id);
          this.name = data.name;
          this.description = data.description;
          break;
         case 'sales':
           this.id = Number(data.id);
           this.prodId = data.prodId;
           this.price = data.price;
          break;
          case 'customer':
            this.id = Number(data.id);
           this.firstName = data.first_name;
           this.lastName = data.last_name;
          break;
          case 'location':
            //Uses Id instead of id because of api
           this.id = Number(data.Id);
           this.address = data.address
           this.city = data.city
           this.state = data.state
           this.postalCode =  data.postalCode
          break;
          case 'product':
           this.id = Number(data.id);
           this.categoryId = data.catId;
           this.name = data.name;
           this.description = data.description;
           this.price = data.price;
           this.image = data.image;
           this.quantity = data.quantity;
          break;
      }
    }






  })
  }


  toggleModal():void{
    this.showModal = !this.showModal;
    this.edit = false;




  }

  closeModal():void{
    this.showModal = false;
    this.edit = false;
    this.clearFields();
  }





  submitForm():void{


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
        this.edit ? this.putService.editProduct(Number(this.id),newProduct).subscribe(() => this.onRefreshTable.emit()) : this.onAddProduct.emit(newProduct);
        break;
      case "category":
        const newCategory:any = {
          name: this.name,
          description:this.description,
          image: this.image

        }
        this.edit ? this.putService.editCategory(Number(this.id),newCategory).subscribe(() => this.onRefreshTable.emit()) : this.onAddCategory.emit(newCategory)
        break;

      case "customer":
        const newCustomer:Customer = {
          first_name:this.firstName,
          last_name:this.lastName
        }
        this.edit ? this.putService.editCustomer(Number(this.id),newCustomer).subscribe(() => this.onRefreshTable.emit()) : this.onAddCustomer.emit(newCustomer)
          break;

          case "location":
            const newLocation:any = {
              address:this.address,
              city:this.city,
              state:this.state,
              postalCode:Number(this.postalCode)
            }
            this.edit ? this.putService.editLocation(Number(this.id),newLocation).subscribe(() => this.onRefreshTable.emit()) :this.onAddLocation.emit(newLocation)
              break;

              case "sales":
                const newSale:any = {
                  prodId:Number(this.prodId),
                  price:Number(this.price)

                }
                this.edit ? this.putService.editSale(Number(this.id),newSale).subscribe(() => this.onRefreshTable.emit()) :this.onAddSale.emit(newSale)
                  break;

    }



    this.closeModal();


  }




  clearFields():void{
    this.categoryId = null
    this.prodId = null;
    this.firstName=""
    this.lastName=""
    this.name=""
    this.description=""
    this.image=""
    this.price= null
    this.quantity = null
  }


}
