import {Product, Category, Customer, Sale,} from '../DataInterfaces';


export const Products:Product[] = [
{
    id:1,
    catId:1,
    name:"macbook pro",
    description:"Apples professional Laptop",
    image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000",
     price:1220,
     quantity:30
},
{
    id:2,
    catId:1,
    name:"Lenovo Thinkpad",
    description:"Professional Windows Laptop",
    image:"https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzI1MTkwfGltYWdlL3BuZ3xoZTQvaGU3LzExMDMzODkwMzU3Mjc4LnBuZ3wwZWQzZWU4OTAxNDI0NGM2ODVhMTc4MGU0MzA0ZDQyZWFkYjBmNjY5OGUwMjM4ZjU5OWVmZTE2NTEzYzU1YTQ3/lenovo-laptop-workstation-thinkpad-p15-15-subseries-hero.png",
    price:900,
    quantity:30
},
{
    id:3,
    catId:2,
    name:"Down Jacket",
    description:"Jacket with goose feathers",
    image:"https://www.rei.com/media/e1d02698-67ed-4f11-af88-c54a84fd838b?size=576x768",

    price:120,
    quantity:30
},

{
    id:4,
    catId:4,
    name:"Milk",
    description:"Whole Milk fortified",
    image:"https://www.meijer.com/content/dam/meijer/product/0004/12/5010/20/0004125010200_2_A1C1_0600.png",

    price:20,
    quantity:30
},
{
    id:5,
    catId:1,
    name:"macbook book air",
    description:"Apples professional Laptop",
    image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000",

    price:1220,
    quantity:30
},

{
    id:6,
    catId:2,
    name:"Up Jacket",
    description:"Jacket with goose feathers",
    image:"https://www.rei.com/media/e1d02698-67ed-4f11-af88-c54a84fd838b?size=576x768",

    price:120,
    quantity:30
},
{
    id:7,
    catId:2,
    name:"Right Jacket",
    description:"Jacket with goose feathers",
    image:"https://www.rei.com/media/e1d02698-67ed-4f11-af88-c54a84fd838b?size=576x768",

    price:120,
    quantity:30
},
{
    id:8,
    catId:2,
    name:"Left Jacket",
    description:"Jacket with goose feathers",
    image:"https://www.rei.com/media/e1d02698-67ed-4f11-af88-c54a84fd838b?size=576x768",

    price:120,
    quantity:30
},
{
    id:9,
    catId:3,
    name:"Screw Driver",
    description:"Premium stainless steel screw driver",
    image:"https://cdn.pixabay.com/photo/2012/04/13/21/06/screwdriver-33634__480.png",

    price:20,
    quantity:30
},
{
    id:10,
    catId:3,
    name:"Wrench",
    description:"Premium stainless steel screw driver",
    image:"https://cdn.pixabay.com/photo/2012/04/13/21/06/screwdriver-33634__480.png",

    price:20,
    quantity:30
},
{
    id:11,
    catId:4,
    name:"Milk",
    description:"Whole Milk fortified",
    image:"https://www.meijer.com/content/dam/meijer/product/0004/12/5010/20/0004125010200_2_A1C1_0600.png",

    price:20,
    quantity:30
},
{
    id:12,
    catId:4,
    name:"Eggs",
    description:"Whole Milk fortified",
    image:"https://www.meijer.com/content/dam/meijer/product/0004/12/5010/20/0004125010200_2_A1C1_0600.png",

    price:20,
    quantity:30
},
{
    id:13,
    catId:4,
    name:"Bacon",
    description:"Whole Milk fortified",
    image:"https://www.meijer.com/content/dam/meijer/product/0004/12/5010/20/0004125010200_2_A1C1_0600.png",

    price:20,
    quantity:30
},

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
    {
        id:5,
        name:"Pet Food",
        description:"Food for your furry friends",
        image:"https://upload.wikimedia.org/wikipedia/commons/1/13/Supermarkt.jpg"
    },
]

export const Customers:Customer[] = [
    {
        id: 1,
        first_name: "Raul",
        last_name: "Rodriguez"
    },
    {
        id: 2,
        first_name: "Norma",
        last_name: "Hendricks"
    },
    {
        id: 3,
        first_name: "Stephany",
        last_name: "Vasquez"
    },
    {
        id: 4,
        first_name: "Miguel",
        last_name: "Jimenez"
    }
]





