import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  person!: Person;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getPersonById(id).subscribe(
      (person: Person) => {
        this.person = person;
      },
      (error) => {
        console.error('Error fetching person:', error);
      }
    );
  }

  savePerson(): void {
    this.apiService.updatePerson(this.person).subscribe(
      (updatedPerson: Person) => {
        console.log('Person updated:', updatedPerson);
      },
      (error) => {
        console.error('Error updating person:', error);
      }
    );
  }
}
