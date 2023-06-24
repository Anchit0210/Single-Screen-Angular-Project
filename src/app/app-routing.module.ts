import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PersonListComponent } from './person-list/person-list.component';
// import { PersonEditComponent } from './person-edit/person-edit.component';
// import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { PersonListComponentnoapi } from './person-list/person-list.component.noapi';
import { PersonEditComponentnoapi } from './person-edit/person-edit.component.noapi';
import { PersonDeleteComponentnoapi } from './person-delete/person-delete.component.noapi';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PersonListComponentnoapi },
  { path: 'people/edit/:id', component: PersonEditComponentnoapi },
  { path: 'people/delete/:id', component: PersonDeleteComponentnoapi }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
