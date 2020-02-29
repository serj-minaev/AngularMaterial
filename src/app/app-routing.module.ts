import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {LiveSearchComponent} from './live-search/live-search.component';


const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'spinner', component: SpinnerComponent},
  {path: 'livesearch', component: LiveSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
