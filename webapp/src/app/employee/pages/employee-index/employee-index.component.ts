import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { finalize, catchError } from 'rxjs/operators';

// angular material
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// Import services
import { EmployeeService } from '../../employee.service';

import { Employee } from '../../employee.model';
import { PagedData } from '../../../common/common-data.model';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.scss'],
  providers: [EmployeeService],
})
export class EmployeeIndexComponent implements OnInit {
  // table display cos
  displayedColumns: string[] = ['name', 'email', 'age', 'action'];

  dataSource: MatTableDataSource<Employee>;

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Employee>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
