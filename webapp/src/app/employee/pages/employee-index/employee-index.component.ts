import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { finalize, catchError } from 'rxjs/operators';

// angular material
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// Import services
import { EmployeeService } from '../../employee.service';
import { CompanyService } from '../../../company/company.service';

import { Employee } from '../../employee.model';
import { Company } from '../../../company/company.model';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.scss'],
  providers: [EmployeeService, CompanyService],
})
export class EmployeeIndexComponent implements OnInit {
  // filter form
  filterForm: FormGroup;

  // table display cos
  displayedColumns: string[] = ['name', 'email', 'age', 'action'];

  dataSource: MatTableDataSource<Employee>;

  @ViewChild('paginator') paginator: MatPaginator;

  locations: String[] = [];

  sizes: String[] = [];

  constructor(
    private employeeService: EmployeeService,
    private companyService: CompanyService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadEmployees();
    this.loadCompanies();
    this.initFilterForm();
  }

  filterChanged() {
    this.dataSource.data = this.dataSource.data.filter(employee => {
      console.log(employee.company.location)
    });
  }

  private loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Employee>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  private loadCompanies(): void {
    this.companyService.getAllCompanies().subscribe(
      data => {
        this.locations = data.map(company => company.location);
        this.sizes = data.map(company => company.size)
      }
    );
  }

  // private methods
  private initFilterForm(): void {
    // filter form
    this.filterForm = this.fb.group({
      location: ['', Validators.nullValidator],
      size: ['', Validators.nullValidator],
      pageIndex: [0, Validators.required],
      pageSize: [10, Validators.required],
    });
  }
}
