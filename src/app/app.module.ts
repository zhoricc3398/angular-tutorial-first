import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorComponent } from './error/error.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AdminComponent } from './admin/admin.component';
import { GuardComponent } from './guard/guard.component';
import { AdminGuard } from './admin.guard';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WishlistComponent,
    CurrencyComponent,
    CurrencyExchangeComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorComponent,
    BreadcrumbsComponent,
    AdminComponent,
    GuardComponent,
    RegisterUserComponent,
    UsersComponent,
    LoginComponent,
    EmployeesComponent,
    EmployeeRegisterComponent,
    MenuComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', data: {name: 'Home'}, component: ProductListComponent },
      { path: 'products/:productId', data: {name: 'Product'}, component: ProductDetailsComponent },
      { path: 'cart', data: {name: 'Cart'}, component: CartComponent },
      { path: 'shipping', data: {name: 'Shipping'}, component: ShippingComponent },
      { path: 'wishlist', data: {name: 'Wishlist'}, component: WishlistComponent },
      { path: 'currency', data: {name: 'Currency'}, component: CurrencyComponent },
      { path: 'currency-exchange', data: {name: 'Currency Exchange'}, component: CurrencyExchangeComponent },
      { path: 'dashboard', data: {name: 'Dashboard'}, component:DashboardComponent },
      { path: 'dashboard/news', data: {name: 'News'}, component: NewsComponent },
      { path: 'dashboard/news/:articleId', data: {name: 'Article'}, component: ArticleComponent },
      { path: 'error', data: {name: 'Error'}, component: ErrorComponent },
      { path: 'guard', data: {name: 'Guard'}, component: GuardComponent },
      { path: 'admin', data: {name: 'Admin'}, component: AdminComponent, canActivate: [AdminGuard] },
      { path: 'register', data: {name: 'Register'}, component: RegisterUserComponent },
      { path: 'users', data: {name: 'Users'}, component: UsersComponent , canActivate: [LoginGuard]},
      { path: 'login', data: {name: 'Login'}, component: LoginComponent },
      { path: 'employees', data: {name: 'Employees'}, component: EmployeesComponent },
      { path: 'employee/register', data: {name: 'Register Employee'}, component: EmployeeRegisterComponent },
      { path: 'employee/:id', data: {name: 'Employee'}, component: EmployeesComponent },
      { path: '**', redirectTo: 'error' },
      { path: '', component: ProductListComponent }
    ]),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
