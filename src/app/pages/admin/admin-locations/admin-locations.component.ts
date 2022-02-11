import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get/get.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-admin-locations',
  templateUrl: './admin-locations.component.html',
  styleUrls: ['./admin-locations.component.scss']
})
export class AdminLocationsComponent implements OnInit {

  constructor(private getService: GetService,private postService: PostService) { }
  data:any[] = []

  ngOnInit(): void {
    this.getService.getLocations().subscribe((locations) =>(this.data = locations))
  }

  addLocation(data:Location){
    this.postService.addLocation(data).subscribe(() => (this.ngOnInit()))
    
    
  }
}
