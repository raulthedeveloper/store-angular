export interface Product {
    id?:number,
    catId?:number,
    name:string,
    description:string,
    image:string,
    price:number,
    quantity:number
}

export interface Category {
    id?:number,
    name:string,
    description:string,
    image:string
}

export interface Sale {
    id?:number,
    prodId:number,
    price:number
}

export interface Customer{
     id?:number,
    first_name:string,
    last_name:string
}

export interface Cart {
    id?:number,
    custId:number,
    prodId:number,
    quantity:number
}

export interface Location {
    id?:number,
    address:string
}

export interface StoreHour{
    id:number,
    locationId:number,
    sunday:string,
    monday:string,
    tuesday:string,
    wednesday:string,
    thursday:string,
    friday:string,
    saterday:string,
}

