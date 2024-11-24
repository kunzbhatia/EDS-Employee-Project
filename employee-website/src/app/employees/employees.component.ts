import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model'; // Import the Employee model

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'salary', 'age', 'details'];
  employees: Employee[] = []; // Use the Employee model
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
      this.filteredEmployees = [...this.employees]; // Set filtered employees to the full list initially
    });
  }

  filterEmployees(): void {
    this.filteredEmployees = this.employees.filter(employee =>
      employee.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
