import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee.model'; // Import the Employee model

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee | undefined; // Use the Employee model

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<Employee>(`https://673f3b8aa9bc276ec4b7be6e.mockapi.io/api/v1/employee/${id}`).subscribe((data: Employee) => {
        this.employee = data;
      });
    }
  }
}