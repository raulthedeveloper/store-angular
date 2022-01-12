import { Injectable } from '@angular/core';
import { Products, Categories } from '../mock-data';
import {Product,Category} from "../DataInterfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProducts():Product[]{
    return Products;
  }
  getCategories():Category[]{
    return Categories;
  }
}
