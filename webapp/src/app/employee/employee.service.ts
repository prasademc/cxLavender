import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './employee.model';
import { Filter } from '../common/models/filter.model';

import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {
  //root url
  private apiEndpoint = '';

  constructor(private httpClient: HttpClient) {
    this.apiEndpoint = environment.apiEndpoint + 'employees/';
  }

  /**
   * @description Get all Employees
   */
  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiEndpoint);
  }

  /**
   * @description filter all employee by it's company location and size
   * @param filter
   */
  filterEmployeesByCompanyLocationAndSize(filter: Filter): Observable<Employee[]> {
    return this.httpClient.post<Employee[]>(this.apiEndpoint + 'search', filter);
  }

  /**
   * @description get employee by id
   * @param id
   */
  getEmployeeById(id: String): Observable<Employee> {
    return this.httpClient.get<Employee>(this.apiEndpoint + id);
  }

  /**
   * @description update existion employee
   * @param employee
   */
  updateEmployee(id: String, employee: Employee): Observable<{}> {
    return this.httpClient.patch(this.apiEndpoint + id, employee);
  }

  /**
   * @description create new employee
   * @param employee
   */
  createEmployee(employee: Employee): Observable<{}> {
    return this.httpClient.post(this.apiEndpoint, employee);
  }

  /**
   * @description delete employee by id
   * @param id
   */
  deleteEmployee(id: String): Observable<{}> {
    return this.httpClient.delete(this.apiEndpoint + id);
  }
}
