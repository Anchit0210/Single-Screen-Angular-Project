import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  people!: Person[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllPeople().subscribe(
      (people: Person[]) => {
        this.people = people;
      },
      (error) => {
        console.error('Error fetching people:', error);
      }
    );
  }

  editPerson(id: number): void {
  }

  deletePerson(id: number): void {
    this.apiService.deletePerson(id).subscribe(
      () => {
        this.people = this.people.filter(person => person.id !== id);
      },
      (error) => {
        console.error('Error deleting person:', error);
      }
    );
  }
}
