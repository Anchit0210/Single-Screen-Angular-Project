import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponentnoapi implements OnInit {
  people!: Person[];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.people = this.personService.getAllPeople();
  }


  editPerson(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number): void {
    this.personService.deletePerson(id);
    this.people = this.personService.getAllPeople();
  }
}
