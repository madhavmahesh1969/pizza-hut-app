import { Routes, RouterModule,  CanActivate } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';

import { ServerComponent } from '../components/server/server.component';
import { MenuListComponent } from '../components/server/menu-list/menu-list.component';
import { MenuItemComponent } from '../components/server/menu-item/menu-item.component';
import { TableListComponent } from '../components/server/table-list/table-list.component';
import { TableItemComponent } from '../components/server/table-item/table-item.component';
import { MenuCartComponent } from '../components/server/menu-cart/menu-cart.component';
import { OrderPlaceComponent } from '../components/server/order-place/order-place.component';
import { OrderSummaryComponent } from '../components/server/order-summary/order-summary.component';

import { LogoutComponent } from '../components/logout/logout.component';

import { AuthGuardService as AuthGuard } from '../service/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'server', component: ServerComponent,  
    children: [
      { path: '', redirectTo: 'orderPlace', pathMatch: 'full' },
      { path: 'orderPlace', component: OrderPlaceComponent },
      { path: 'orderSummary/:table_id', component: OrderSummaryComponent }
    ], canActivate: [AuthGuard]
  },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);