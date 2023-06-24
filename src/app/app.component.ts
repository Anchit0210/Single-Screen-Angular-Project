import { Component } from '@angular/core';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people!: Person[];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.people = this.personService.getAllPeople();
  }

  editPerson(id: number): void {
    // Implement the logic to navigate to the person edit view
  }

  deletePerson(id: number): void {
    this.personService.deletePerson(id);
    this.people = this.personService.getAllPeople();
  }
}
