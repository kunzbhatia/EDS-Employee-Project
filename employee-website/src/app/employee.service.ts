import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model'; // Import the Employee model

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://673f3b8aa9bc276ec4b7be6e.mockapi.io/api/v1/employee'; // Update the API URL

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
}