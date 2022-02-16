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

  toggle:boolean | undefined;

  tableHeader:any[] = []
  tableValue:any[] = []
   images:string[] = []
  currentRoute:string | undefined;

  constructor(private router : Router,private deletesService:DeleteService, private stateSharing: StateSharingService ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url
    this.stateSharing.currentToggle.subscribe(toggle => this.toggle = toggle)

  }

  ngOnChanges(){
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

  delete(id:number):void{
    if(confirm('Are you sure you want to delete')){
      this.onDelete.emit(id)
    }
  }

  edit(id:number):void{
    // alert("your id is" + id)
    // Activate modal with values
    this.stateSharing.toggleModal(true,true)

    this.data.forEach(e => {
      if(e.id == id){
        this.stateSharing.dataForEdit(e)
      }
    })
    //Add edit emitters
  }



  async setData(data:any | null){
   await data.forEach((element : any | null) => {
        this.tableValue.push(Object.values(element).map(String))

    });

    data.length  == 0 ? null : this.tableHeader.push(...Object.keys(await data[0]));




  }






}
