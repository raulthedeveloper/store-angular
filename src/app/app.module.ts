import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { MainHeaderComponent } from './components/layout/main-header/main-header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { StoreComponent } from './pages/store/store.component';
import { FormModalComponent } from './components/layout/form-modal/form-modal.component';
import { CategoryUiComponent } from './components/category/category-ui/category-ui.component';
import { ProductRowComponent } from './components/product/product-row/product-row.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { CategoryCardComponent } from './components/category/category-card/category-card.component';
import { StoreUiComponent } from './components/store-ui/store-ui.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { StoreCategoryComponent } from './pages/store-category/store-category.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsTableComponent } from './components/product/products-table/products-table.component';
import { CategoryTableComponent } from './components/category/category-table/category-table.component';
import { CategoryRowComponent } from './components/category/category-row/category-row.component';
import { PostModalComponent } from './components/modals/post-modal/post-modal.component';


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
    StoreComponent,
    FormModalComponent,
    CategoryUiComponent,
    ProductRowComponent,
    ProductCardComponent,
    CategoryCardComponent,
    StoreUiComponent,
    ProductDetailComponent,
    StoreCategoryComponent,
    CartComponent,
    ProductsTableComponent,
    CategoryTableComponent,
    CategoryRowComponent,
    PostModalComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
