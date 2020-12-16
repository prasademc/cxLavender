import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// angular material
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

// Import services
import { EmployeeService } from '../../employee.service';
import { CompanyService } from '../../../company/company.service';
import { SnackbarService } from '../../../common/services/snacker.service';

// Import models
import { Employee } from '../../employee.model';

// Import components
import { ConfirmComponent } from '../../../common/confirm/confirm.component';
import { Filter } from 'src/app/common/models/filter.model';

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

  locations: string[] = [];

  sizes: string[] = [];

  constructor(
    private employeeService: EmployeeService,
    private companyService: CompanyService,
    private snackbarService: SnackbarService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadEmployees();
    this.loadCompanies();
    this.initFilterForm();
  }

  filterEmployee() {
    let filter = new Filter();
    filter.location = this.filterForm.value.location;
    filter.size = this.filterForm.value.size;

    this.employeeService
      .filterEmployeesByCompanyLocationAndSize(filter)
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource<Employee>(data);
        this.dataSource.paginator = this.paginator;
      });
  }

  deleteEmployee(name: string, id: string) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '580px',
      data: { name: name },
    });

    // dialog close event handler
    dialogRef.afterClosed().subscribe((isConfirmed) => {
      if (isConfirmed === true) {
        this.employeeService.deleteEmployee(id).subscribe(
          (data) => {
            const msg = `Employee ${name} has been deleted successfully`;
            this.success(msg);
            this.loadEmployees();
          },
          (error) => {
            const err = `Error occurred while deleting employee ${name}`;
            this.error(err);
          }
        );
      }
    });
  }

  private loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Employee>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  private loadCompanies(): void {
    this.companyService.getAllCompanies().subscribe((data) => {
      this.locations = [...new Set(data.map((company) => company.location))];
      this.sizes = [...new Set(data.map((company) => company.size))];
    });
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

  private success(msg: string) {
    this.snackbarService.success(msg);
  }

  private error(errorResponse: string) {
    this.snackbarService.error(errorResponse);
  }
}
