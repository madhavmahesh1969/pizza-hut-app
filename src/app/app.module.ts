import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './route/app.routes';

import  {MenuCartService} from './service/menu-cart.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TopMenuBarComponent } from './components/top-menu-bar/top-menu-bar.component';

import { ServerComponent } from './components/server/server.component';
import { OrderPlaceComponent } from './components/server/order-place/order-place.component';
import { MenuListComponent } from './components/server/menu-list/menu-list.component';
import { MenuItemComponent } from './components/server/menu-item/menu-item.component';
import { TableListComponent } from './components/server/table-list/table-list.component';
import { TableItemComponent } from './components/server/table-item/table-item.component';
import { MenuCartComponent } from './components/server/menu-cart/menu-cart.component';
import { OrderSummaryComponent } from './components/server/order-summary/order-summary.component';

import { LogoutComponent } from './components/logout/logout.component';
import { AuthService } from './service/auth.service';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuItemComponent,
    TableListComponent,
    TableItemComponent,
    MenuCartComponent,
    TopMenuBarComponent,
    OrderSummaryComponent,
    LoginComponent,
    LogoutComponent,
    ServerComponent,
    OrderPlaceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [MenuCartService, appRoutingProviders, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
