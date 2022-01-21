import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {Product,Category, Customer} from "../../DataInterfaces";
import { url,httpOptions } from '../ServiceUtils';



@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(private http:HttpClient) { }


  editProduct(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>(`${url.apiUrlCategories}/${id}`,product,httpOptions)
  }

  editCategory(id:number,category:Category):Observable<Category>{
    return this.http.put<Category>(`${url.apiUrlCategories}/${id}`,category,httpOptions)
  }

}
