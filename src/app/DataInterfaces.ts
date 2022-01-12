export interface Product {
    id?:number,
    catId?:number,
    name:string,
    description:string,
    price:number
}

export interface Category {
    id?:number,
    name:string,
    description:string,
    image:string
}