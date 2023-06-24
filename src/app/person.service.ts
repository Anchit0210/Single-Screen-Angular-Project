import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private people: Person[] = [
    { id: 1, name: 'Anchit', age: 21 },
    { id: 2, name: 'Anchit', age: 21 },
    { id: 3, name: 'Anchit', age: 21 },
    { id: 4, name: 'Anchit', age: 21 },
    { id: 5, name: 'Anchit', age: 21 },
  ];

  getAllPeople(): Person[] {
    return this.people;
  }

  getPersonById(id: number): Person | undefined {
    return this.people.find(person => person.id === id);
  }

  updatePerson(person: Person): void {
    const index = this.people.findIndex(p => p.id === person.id);
    if (index !== -1) {
      this.people[index] = person;
    }
  }

  deletePerson(id: number): void {
    this.people = this.people.filter(person => person.id !== id);
  }
}
