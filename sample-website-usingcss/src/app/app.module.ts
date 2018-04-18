import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {RegisterComponent} from './register/register.component';
import {ServicesComponent} from './services/services.component';
import {ProjectsComponent} from './projects/projects.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'services', component: ServicesComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ServicesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent, LoginComponent]
})
export class AppModule {
}
