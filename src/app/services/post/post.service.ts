import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {Product,Category, Customer} from "../../DataInterfaces";
import { url, httpOptions } from '../ServiceUtils';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }


  addCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(url.apiUrlCategories, category, httpOptions)
  }

  addProduct(product: Product):Observable<Product>{

    return this.http.post<Product>(url.apiUrlProducts, product, httpOptions)
  }
}
