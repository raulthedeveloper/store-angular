export interface Product {
    id?:number,
    catId?:number,
    name:string | undefined,
    description:string,
    image:string,
    price:number,
    quantity:number
}

export interface UnitedStates{
    id?:number,
    stateCode:string,
    stateName:string
}

export interface Category {
    id?:number,
    name:string | undefined,
    description:string,
    image:string
}

export interface Sale {
    id?:number,
    prodId:number,
    name:string,
    price:number
}

export interface Customer{
     id?:number | undefined,
    first_name:string  | undefined,
    last_name:string  | undefined
}

export interface Cart {
    id?:number,
    custId:number,
    prodId:number,
    quantity:number
}

export interface Location {
    id:number,
    address:string,
    city:string,
    state:string,
    postalCode:number
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

export interface ProductByCat{
    id: number,
    catId: number,
    category: null,
    name: string,
    description: string,
    image:string ,
    price: number,
    quantity: number
}


