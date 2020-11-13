import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLivrosComponent } from './add-livros/add-livros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteLivrosComponent } from './delete-livros/delete-livros.component';
import { EditLivrosComponent } from './edit-livros/edit-livros.component';
import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
  { path:'', redirectTo: 'dashboard', pathMatch: 'full' },
  { path:'dashboard', component: DashboardComponent },
  { path:'livros', component: LivrosComponent },
  { path:'add-livros', component: AddLivrosComponent },
  { path:'edit-livros', component: EditLivrosComponent },
  { path:'delete-livros', component: DeleteLivrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
