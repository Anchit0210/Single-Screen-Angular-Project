import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PersonListComponent } from './person-list/person-list.component';
// import { PersonEditComponent } from './person-edit/person-edit.component';
// import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { PersonListComponentnoapi } from './person-list/person-list.component.noapi';
import { PersonEditComponentnoapi } from './person-edit/person-edit.component.noapi';
import { PersonDeleteComponentnoapi } from './person-delete/person-delete.component.noapi';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponentnoapi,
    PersonEditComponentnoapi,
    PersonDeleteComponentnoapi
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
