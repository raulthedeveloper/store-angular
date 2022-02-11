import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteService } from 'src/app/services/delete/delete.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data:any[] = []
  @Input() type:string | undefined

  tableHeader:any[] = []
  tableValue:any[] = []
   images:string[] = []
  currentRoute:string | undefined;

  constructor(private router : Router,private deletesService:DeleteService ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url
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
    switch(this.type){
      case "location":
        alert("you deleted item with id:" + id)
      this.deletesService.deleteLocation(id).subscribe();
      
    }
    console.log("delete id:" + id)
  }
 

  async setData(data:any | null){
   await data.forEach((element : any | null) => {
        this.tableValue.push(Object.values(element).map(String))
      
    });
  
    data.length  == 0 ? null : this.tableHeader.push(...Object.keys(await data[0]));
    


    
  }
  



  

}
