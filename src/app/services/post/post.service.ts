import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {Product,Category, Customer,Sale} from "../../DataInterfaces";
import { url, httpOptions } from '../ServiceUtils';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }


  addCategory(category:Category):Observable<Category>{
    return this.http.post<Category>(url.apiUrlCategories, category, httpOptions)
  }

  addCustomer(customers:Customer):Observable<Customer>{
    return this.http.post<Customer>(url.apiUrlCustomers, customers, httpOptions)
  }

  addSales(sale:Sale):Observable<Sale>{
    return this.http.post<Sale>(url.apiUrlSales, sale, httpOptions)
  }

  addProduct(product: Product):Observable<Product>{

    return this.http.post<Product>(url.apiUrlProducts, product, httpOptions)
  }

  addLocation(data: Location):Observable<Location>{

    return this.http.post<Location>(url.apiUrlLocation, data, httpOptions)
  }

}
