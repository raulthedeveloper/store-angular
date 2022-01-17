import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Products, Categories } from '../mock-data';
import {Product,Category} from "../DataInterfaces";
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
private apiUrlProducts = "https://localhost:44309/api/products";
private apiUrlCategories = "https://localhost:44309/api/categories";

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    const products = of(Products);
    if(environment.testApi){
       return products;
    }
    else{
      return this.http.get<Product[]>(this.apiUrlProducts);
    }
    
    
  }

  addCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(this.apiUrlCategories, category, httpOptions)
  }

  addProduct(product: Product):Observable<Product>{
    console.log(product)
    return this.http.post<Product>(this.apiUrlProducts, product, httpOptions)
  }

  getCategories():Observable<Category[]>{
    const categories = of(Categories);
    if(environment.testApi){
      return categories;
    }
    else{
      return this.http.get<Product[]>(this.apiUrlCategories);
    }
    
    
  }


}
