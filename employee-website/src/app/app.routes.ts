import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] },
  { path: 'employees/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard] }
];