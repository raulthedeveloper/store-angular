
import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Products, Categories,Customers } from '../../mock-data';
import {Product,Category, Customer} from "../../DataInterfaces";
import { environment } from 'src/environments/environment';
import { url } from '../ServiceUtils';


@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    
    if(environment.testApi){
       return of(Products);
    }
    else{
      return this.http.get<Product[]>(url.apiUrlProducts);
    }
    
    
  }

  getCategories():Observable<Category[]>{
    if(environment.testApi){
      return of(Categories);
    }
    else{
      return this.http.get<Product[]>(url.apiUrlCategories);
    }
    
  }

  getCustomers():Observable<Customer[]>{
    if(environment.testApi){
      return of(Customers);
    }
    else{
      return this.http.get<Customer[]>(url.apiUrlCustomers);
    }
  }
}
