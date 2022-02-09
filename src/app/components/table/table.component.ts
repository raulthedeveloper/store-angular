import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data:any[] = []
  tableHeader:any[] = []
  tableValue:any[] = []
   images:string[] = []

  constructor() { }

  ngOnInit(): void {

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


 

  async setData(data:any | null){
   await data.forEach((element : any | null) => {
        this.tableValue.push(Object.values(element))
      
    });
  
    data.length  == 0 ? null : this.tableHeader.push(...Object.keys(await data[0]));
    


    
  }
  



  

}
