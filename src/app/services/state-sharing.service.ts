import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class StateSharingService {
  private toggle = new BehaviorSubject<boolean>(false);
  private edit = new BehaviorSubject<boolean>(false);

  private editData = new BehaviorSubject<any>({});

  private tableRefresh = new BehaviorSubject<any>(Function)


  currentEdit = this.edit.asObservable();



  currentToggle = this.toggle.asObservable();
  currentData = this.editData.asObservable();
  currentTable = this.tableRefresh.asObservable();



  constructor() { }

  toggleModal(toggle: boolean, edit: boolean){
    this.toggle.next(toggle);

    this.edit.next(edit)
  }

  dataForEdit(data:any){
    this.editData.next(data)
  }

  refreshTable(callback:any){
    this.tableRefresh.next(callback)
    
  }


}
