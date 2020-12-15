import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {

  constructor(private httpClient: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('/api/employees');
  }
}
