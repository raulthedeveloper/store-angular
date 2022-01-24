
import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {Product,Category, Customer, Sale, Location} from "../../DataInterfaces";
import { environment } from 'src/environments/environment';
import { url } from '../ServiceUtils';

import { Products, Categories } from '../../Mock-Data/mock-data';
import { Sales } from 'src/app/Mock-Data/Sale-Mock-Data';
import { Locations } from 'src/app/Mock-Data/Location-Mock-Data';
import { Customers } from '../../Mock-Data/Customer-Mock-Data';


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

  getSales():Observable<Sale[]>{
    
    if(environment.testApi){
       return of(Sales);
    }
    else{
      return this.http.get<Sale[]>(url.apiUrlSales);
    }
    
  }

  getLocations():Observable<Location[]>{
    
    if(environment.testApi){
       return of(Locations);
    }
    else{
      return this.http.get<Location[]>(url.apiUrlSales);
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
