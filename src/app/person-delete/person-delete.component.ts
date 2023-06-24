import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
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

  deletePerson(): void {
    this.apiService.deletePerson(this.person.id).subscribe(
      () => {
        console.log('Person deleted:', this.person);
        // Implement the logic to navigate back to the person list view
      },
      (error) => {
        console.error('Error deleting person:', error);
      }
    );
  }
}
