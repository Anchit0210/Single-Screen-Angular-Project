import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponentnoapi implements OnInit {
  person!: Person;

  constructor(private route: ActivatedRoute, private personService: PersonService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const person = this.personService.getPersonById(id);
  
    if (person) {
      this.person = person;
    } else {
    }
  }
  

  deletePerson(): void {
    this.personService.deletePerson(this.person.id);
  }
}
