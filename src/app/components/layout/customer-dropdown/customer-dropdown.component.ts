import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dropdown',
  templateUrl: './customer-dropdown.component.html',
  styleUrls: ['./customer-dropdown.component.scss']
})
export class CustomerDropdownComponent implements OnInit {



  constructor() { }

  toggleDropdown:boolean = false

  

  ngOnInit(): void {
  }

  showDropDown(): void{
    this.toggleDropdown = !this.toggleDropdown
  }

}
