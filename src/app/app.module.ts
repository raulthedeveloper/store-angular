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


const appRoutes: Routes = [
  {path:"", component:HomeComponent},
  {path:"store", component:StoreComponent},
  {path:"products",component:ProductsComponent},
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
