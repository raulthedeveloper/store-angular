
import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {Product,Category, Customer, Sale, Location,  ProductByCat, UnitedStates } from "../../DataInterfaces";
import { environment } from 'src/environments/environment';
import { url } from '../ServiceUtils';
import { Router } from '@angular/router';

import { Products, Categories } from '../../Mock-Data/mock-data';
import { Sales } from 'src/app/Mock-Data/Sale-Mock-Data';
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

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${url.apiUrlProducts}/${id}`);
  }

  getProductsByCat(id:number):Observable<ProductByCat[]>{
    return this.http.get<ProductByCat[]>(url.apiUrlProductsByCat + id);
  }

  getStore():Observable<any[]>{
    return this.http.get<any[]>(url.apiUrlStore);
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

      return this.http.get<Location[]>(url.apiUrlLocation);

  }

  getUnitedState():Observable<UnitedStates[]>{

      return this.http.get<UnitedStates[]>(url.apiUrlUnitedStates);


  }

  getCategories():Observable<Category[]>{
    if(environment.testApi){
      return of(Categories);
    }
    else{
      return this.http.get<Category[]>(url.apiUrlCategories);
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
