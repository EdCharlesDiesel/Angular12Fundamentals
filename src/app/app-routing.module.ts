import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBoundComponent } from './data-bound/data-bound.component';
import { EventsListComponent } from './events-list/events-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "event-list", component: EventsListComponent },
  { path: 'data-bound', component: DataBoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
