import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/DataInterfaces';
import { GetService } from 'src/app/services/get/get.service';
import { DeleteService } from 'src/app/services/delete/delete.service';
import { PostService } from 'src/app/services/post/post.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

 category:Category[] = [];
  constructor(private getService: GetService, private postService : PostService, private deleteService : DeleteService) { }

  ngOnInit(): void {

    this.getService.getCategories().subscribe((category) =>(this.category = category));
  }



  addCategory(category:Category){
    this.postService.addCategory(category).subscribe( () =>(this.ngOnInit()))
  }

  deleteCategory(id:number){
    this.deleteService.deleteCategory(id).subscribe();
  }


}
