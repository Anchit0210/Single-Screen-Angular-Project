import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponentnoapi implements OnInit {
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
  

  savePerson(): void {
    this.personService.updatePerson(this.person);
  }
}
