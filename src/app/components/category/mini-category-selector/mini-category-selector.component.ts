import { Component, OnInit, Input } from '@angular/core';
import {Category} from '../../../DataInterfaces'

@Component({
  selector: 'app-mini-category-selector',
  templateUrl: './mini-category-selector.component.html',
  styleUrls: ['./mini-category-selector.component.scss']
})
export class MiniCategorySelectorComponent implements OnInit {

  @Input() categories:Category[] | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
