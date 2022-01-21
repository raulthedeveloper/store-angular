import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Product,Category, Customer} from "../../DataInterfaces";
import { url } from '../ServiceUtils';


@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  deleteProduct(id:number):Observable<Product>{
    return this.http.delete<Product>(`${url.apiUrlProducts}/${id}`)
  }

  deleteCategory(id:number):Observable<Category>{
    return this.http.delete<Category>(`${url.apiUrlCategories}/${id}`)
  }

}
