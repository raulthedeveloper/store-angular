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
    
    this.data.forEach((element:any) => {
      Object.keys(element).forEach(e =>{
        if( e == "image"){

          this.images.push(element[e])

          //also remove them from array
          delete element.image
          console.log(element.image)

         }
      })
     
    });

    this.setData(this.data);

  }

  setData(data:any){
    console.log(data)

    data.forEach((element : any) => {
     
        this.tableValue.push(Object.values(element))
      
    });
  
    
   this.tableHeader.push(...Object.keys(data[0]))
  
    
  }



  

}
