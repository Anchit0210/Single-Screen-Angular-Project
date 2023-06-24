import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = ''; 

  constructor(private http: HttpClient) {}

  getAllPeople(): Observable<Person[]> {
    const url = `${this.baseUrl}/people`;
    return this.http.get<Person[]>(url);
  }

  getPersonById(id: number): Observable<Person> {
    const url = `${this.baseUrl}/people/${id}`;
    return this.http.get<Person>(url);
  }

  updatePerson(person: Person): Observable<Person> {
    const url = `${this.baseUrl}/people/${person.id}`;
    return this.http.put<Person>(url, person);
  }

  deletePerson(id: number): Observable<void> {
    const url = `${this.baseUrl}/people/${id}`;
    return this.http.delete<void>(url);
  }
}
