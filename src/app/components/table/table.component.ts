// @ts-nocheck

import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteService } from 'src/app/services/delete/delete.service';
import {StateSharingService} from "../../services/state-sharing.service"




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {



  @Input() data:any[] = []
  @Input() type:string | undefined
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  @Input() onAddCustomer:any


  toggle:boolean | undefined;



  tableHeader:any[] = []
  tableValue:any[] = []
  foreignObjectArr:any[] = [];

  images:string[] = []
  currentRoute:string | undefined;

  constructor(private router : Router,private deletesService:DeleteService, private stateSharing: StateSharingService ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url
    this.stateSharing.currentToggle.subscribe(toggle => this.toggle = toggle)

  }



  ngOnChanges(){
    this.images = [];
    this.data.forEach((element:any) => {
      Object.keys(element).forEach(e =>{
        if( e == "image"){

          this.images.push(element[e])

          //also remove them from array
          delete element.image

         }
      })

    });

    this.setData(this.data);
  }

  ngDoCheck(){
    this.data = this.data
  }





  delete(id:number):void{
    if(confirm('Are you sure you want to delete')){
     let index = this.data.findIndex(o => {
       return o.id == id || o.Id == id || o.ID == id;
      })



      if(index !== -1) {
       this.images.length > 0 ? this.images.splice(index,1) : null
        this.data.splice(index,1)
        this.setData(this.data)
      }

      this.onDelete.emit(id)
    }
  }


   edit(id:number){

    // Activate modal with values
    this.stateSharing.toggleModal(true,true)

    let index = this.data.findIndex(o => {
      return o.id == id || o.Id == id || o.ID == id;
     })


    this.data.forEach(e =>  {

      // Image is added back to the object her before bein

      if(this.currentRoute == "/admin-categories" || this.currentRoute == "/admin-products"){
        e.image = this.images[index]
      }

      if(e.id == id || e.Id == id || e.ID == id){
        this.stateSharing.dataForEdit(e)
      }
    })
    //Add edit emitters


  }



  async setData(data:any | null){
    this.tableValue = [];
    this.tableHeader = [];


   await data.forEach((element:any) => {

        Object.values(element).forEach(e => {

          if(e instanceof Object){

        // Replaces object property with a property of foreign key object provided by json
          Object.getOwnPropertyNames(element).forEach(j => {
            if(j == 'category'){
              element.category = e.name
            }

            if( j == 'product'){
              element.product = e.name
            }
          });



          }
        })

        this.tableValue.push(Object.values(element).map(String))

    });

    data.length  == 0 ? null : this.tableHeader.push(...Object.keys(await data[0]));




  }






}
