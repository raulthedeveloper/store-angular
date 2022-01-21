import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() name:string | undefined;
  @Input() description:string | undefined;
  @Input() image:string | undefined
  @Input () id: string | undefined

  constructor() { }

  ngOnInit(): void {
    
  }

}
