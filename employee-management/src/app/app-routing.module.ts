import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] },
    { path: 'employees/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
