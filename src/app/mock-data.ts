import {Product, Category} from './DataInterfaces';


export const Products:Product[] = [
{
    id:1,
    catId:1,
    name:"macbook pro",
    description:"Apples professional Laptop",
    price:1220
},
{
    id:2,
    catId:1,
    name:"Lenovo Thinkpad",
    description:"Professional Windows Laptop",
    price:900
},
{
    id:3,
    catId:2,
    name:"Down Jacket",
    description:"Jacket with goose feathers",
    price:120
},
{
    id:4,
    catId:3,
    name:"Screw Driver",
    description:"Premium stainless steel screw driver",
    price:20
},
{
    id:4,
    catId:4,
    name:"Milk",
    description:"Whole Milk fortified",
    price:20
}

]

export const Categories:Category[] = [
    {
        id:1,
        name:"Electronics",
        description:"Get the latest Electronics",
        image:"https://cyclingmagazine.ca/wp-content/uploads/2021/01/zwift_devices.jpg"
    },
    {
        id:2,
        name:"Clothing",
        description:"Get the latest Electronics",
        image:"https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=612x612&w=0&h=0bpyh7rdYCy3Lod5pfK9oS72zFPNJSBv7T7l64xUE90="
    }, 
    {
        id:3,
        name:"Tools",
        description:"Get the latest Electronics",
        image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tools-hanging-on-wall-royalty-free-image-760251967-1563391812.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
    },
    {
        id:4,
        name:"Grocery",
        description:"Get the latest Electronics",
        image:"https://upload.wikimedia.org/wikipedia/commons/1/13/Supermarkt.jpg"
    },
]