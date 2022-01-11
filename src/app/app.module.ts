import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateCategoryComponent } from './component/create-category/create-category.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { EditCategoryComponent } from './component/edit-category/edit-category.component';
import { StoreComponent } from './pages/store/store.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { CategoryUiComponent } from './components/category-ui/category-ui.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { StoreUiComponent } from './components/store-ui/store-ui.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { StoreCategoryComponent } from './pages/store-category/store-category.component';
import { CartComponent } from './pages/cart/cart.component';


const appRoutes: Routes = [
  {path:"", component:HomeComponent},
  {path:"store", component:StoreComponent},
  {path:"store/:category",component:StoreCategoryComponent},
  {path:"store/:category/:id",component:ProductDetailComponent},
  {path:"products",component:ProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"categories",component:CategoriesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainHeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    EditProductComponent,
    EditCategoryComponent,
    StoreComponent,
    ProductFormComponent,
    AdminTableComponent,
    FormModalComponent,
    CategoryUiComponent,
    ProductRowComponent,
    ProductCardComponent,
    CategoryCardComponent,
    StoreUiComponent,
    ProductDetailComponent,
    StoreCategoryComponent,
    CartComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
