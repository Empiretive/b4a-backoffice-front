import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'users', loadChildren: () => import('./core/users/users.module').then(m => m.UsersModule) },
  { path: 'products', loadChildren: () => import('./core/products/products.module').then(m => m.ProductsModule) },
  { path: 'tags', loadChildren: () => import('./core/tags/tags.module').then(m => m.TagsModule) },
  { path: 'reports', loadChildren: () => import('./core/reports/reports.module').then(m => m.ReportsModule) },
  { path: 'orders', loadChildren: () => import('./core/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'settings', loadChildren: () => import('./core/settings/settings.module').then(m => m.SettingsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
