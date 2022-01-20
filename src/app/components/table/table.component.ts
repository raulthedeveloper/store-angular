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


  constructor() { }

  ngOnInit(): void {
    
  }

  setData(data:any){
    console.log(data)
    data.forEach((element : any) => {
     
        this.tableValue.push(Object.values(element))
      
      
    });
  
   
   this.tableHeader.push(Object.keys(data[0]))
  
    
  }



  ngAfterViewChecked(){
    this.setData(this.data);
  }
  
  

}
