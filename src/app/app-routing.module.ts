import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { MainSearchComponent } from "./main-search/main-search.component";
 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'main', component: MainSearchComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}