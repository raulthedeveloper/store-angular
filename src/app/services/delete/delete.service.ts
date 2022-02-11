import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Product,Category, Customer,Sale} from "../../DataInterfaces";
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

  deleteCustomer(id:number):Observable<Customer>{
    return this.http.delete<Customer>(`${url.apiUrlCustomers}/${id}`)
  }

  deleteLocation(id:number):Observable<Location>{
    return this.http.delete<Location>(`${url.apiUrlLocation}/${id}`)
  }

  deleteSale(id:number):Observable<Sale>{
    return this.http.delete<Sale>(`${url.apiUrlSales}/${id}`)
  }

}
