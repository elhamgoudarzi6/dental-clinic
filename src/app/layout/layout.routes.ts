import { Route } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Route[] = [{
  path: '', component: LayoutComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'auth', component: LoginComponent },
  ],
}];







