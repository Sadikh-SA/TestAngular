import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Utilisateur/utilisateur.component';
import { PartenaireComponent } from './Partenaire/partenaire.component';

const routes: Routes = [
  { path: 'lister/user', component: DashboardComponent },
  { path: 'lister/partenaire', component: PartenaireComponent }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
