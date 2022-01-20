import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Products, Categories,Customers } from '../mock-data';
import {Product,Category, Customer} from "../DataInterfaces";
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
private apiUrlProducts = "https://localhost:44332/api/Products";
private apiUrlCategories = "https://localhost:44332/api/Categories";
private apiUrlCustomers = "https://localhost:44332/api/Customers";
private apiUrlSales = "https://localhost:44332/api/Sales"

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    
    if(environment.testApi){
       return of(Products);
    }
    else{
      return this.http.get<Product[]>(this.apiUrlProducts);
    }
    
    
  }

  getCategories():Observable<Category[]>{
    if(environment.testApi){
      return of(Categories);
    }
    else{
      return this.http.get<Product[]>(this.apiUrlCategories);
    }
    
  }

  getCustomers():Observable<Customer[]>{
    if(environment.testApi){
      return of(Customers);
    }
    else{
      return this.http.get<Customer[]>(this.apiUrlCustomers);
    }
  }



  addCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(this.apiUrlCategories, category, httpOptions)
  }

  addProduct(product: Product):Observable<Product>{

    return this.http.post<Product>(this.apiUrlProducts, product, httpOptions)
  }

  deleteProduct(id:number):Observable<Product>{
    return this.http.delete<Product>(`${this.apiUrlProducts}/${id}`)
  }

  deleteCategory(id:number):Observable<Category>{
    return this.http.delete<Category>(`${this.apiUrlCategories}/${id}`)
  }

  

  editProduct(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiUrlCategories}/${id}`,product,httpOptions)
  }

  editCategory(id:number,category:Category):Observable<Category>{
    return this.http.put<Category>(`${this.apiUrlCategories}/${id}`,category,httpOptions)
  }



}
