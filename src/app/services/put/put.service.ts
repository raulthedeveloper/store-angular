import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {Product,Category, Customer, Sale} from "../../DataInterfaces";
import { url,httpOptions } from '../ServiceUtils';



@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(private http:HttpClient) { }


  editProduct(id:number,data:Product):Observable<Product>{
    return this.http.put<Product>(`${url.apiUrlCategories}/${id}`,data,httpOptions)
  }

  editCategory(id:number,data:Category):Observable<Category>{
    return this.http.put<Category>(`${url.apiUrlCategories}/${id}`,data,httpOptions)
  }

  editSale(id:number,data:Sale):Observable<Sale>{
    return this.http.put<Sale>(`${url.apiUrlSales}/${id}`,data,httpOptions)
  }

  editCustomer(id:number,data:Customer):Observable<Customer>{
    return this.http.put<Customer>(`${url.apiUrlCustomers}/${id}`,data,httpOptions)
  }

  editLocation(id:number,data:Location):Observable<Location>{
    return this.http.put<Location>(`${url.apiUrlLocation}/${id}`,data,httpOptions)
  }

}
