import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetClientComponent } from './components/get-client/get-client.component';
import { CreateClientComponent } from './components/create-client/create-client.component';

const routes: Routes = [
  { path: '', component: GetClientComponent },
  { path: 'create-client', component: CreateClientComponent },
  { path: 'update-client/:id', component: CreateClientComponent },
  { path: '**', redirectTo:'/create-client', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
