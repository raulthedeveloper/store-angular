import {HttpHeaders} from '@angular/common/http'



export const url = {
 apiUrlProducts: "https://localhost:44332/api/Products",
 apiUrlProductsByCat:"https://localhost:44332/Products/ProductByCateogry?id=",
 apiUrlCategories : "https://localhost:44332/api/Categories",
 apiUrlCustomers : "https://localhost:44332/api/Customers",
 apiUrlSales : "https://localhost:44332/api/Sales",
 apiUrlLocation:"https://localhost:44332/api/Location",
 apiUrlUnitedStates:"https://localhost:44332/api/UnitedStates",
 apiUrlCarts:"https://localhost:44332/api/Carts"

}

export const httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
