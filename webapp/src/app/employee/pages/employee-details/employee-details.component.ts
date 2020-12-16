import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CompanyService } from '../../../company/company.service';
import { EmployeeService } from '../../../employee/employee.service';
import { SnackbarService } from '../../../common/services/snacker.service';

import { Company } from '../../../company/company.model';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  providers: [CompanyService, EmployeeService],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeForm: FormGroup;
  isEmployee: boolean = false;
  employeeId: String = '';
  companies: Company[] = [];

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private employeeService: EmployeeService,
    private snackbarService: SnackbarService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id === '0') {
        this.isEmployee = false;
      } else {
        this.isEmployee = true;
        this.employeeId = params.id;
        this.getEmployee(params.id);
      }
    });
  }

  ngOnInit(): void {
    this.initFilterForm();
    this.loadCompanies();
  }

  /**
   * @description Update existing employee details
   */
  updateEmployee() {
    const selectedCompany = this.companies.filter(
      (company) => company.name === this.employeeForm.value.company
    )[0];

    let compnay = {
      id: selectedCompany.id,
      name: selectedCompany.name,
      size: selectedCompany.size,
      location: selectedCompany.location,
    };

    let employee = new Employee();

    employee.fname = this.employeeForm.value.fname;
    employee.lname = this.employeeForm.value.lname;
    employee.age = this.employeeForm.value.age;
    employee.email = this.employeeForm.value.email;
    employee.company = compnay;

    this.employeeService.updateEmployee(this.employeeId, employee).subscribe(
      (data) => {
        const msg = `Employee ${employee.fname} ${employee.lname} has been updated successfully`;
        this.success(msg);
        this.router.navigate(['/']);
      },
      (error) => {
        const err = `Error occurred while updating employee ${employee.fname} ${employee.lname}`;
        this.error(err);
      }
    );
  }

  /**
   * @description create new employee
   */
  createEmployee() {
    const selectedCompany = this.companies.filter(
      (company) => company.name === this.employeeForm.value.company
    )[0];

    let compnay = {
      id: selectedCompany.id,
      name: selectedCompany.name,
      size: selectedCompany.size,
      location: selectedCompany.location,
    };

    let employee = new Employee();

    employee.fname = this.employeeForm.value.fname;
    employee.lname = this.employeeForm.value.lname;
    employee.age = this.employeeForm.value.age;
    employee.email = this.employeeForm.value.email;
    employee.company = compnay;

    this.employeeService.createEmployee(employee).subscribe(
      (data) => {
        const msg = `Employee ${employee.fname} ${employee.lname} has been created successfully`;
        this.success(msg);
        this.router.navigate(['/']);
      },
      (error) => {
        const err = `Error occurred while creating employee ${employee.fname} ${employee.lname}`;
        this.error(err);
      }
    );
  }

  // private methods

  /**
   * @description get all the companies
   */
  private loadCompanies(): void {
    this.companyService.getAllCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  /**
   * @description get employee by it's id
   * @param id
   */
  private getEmployee(id: String) {
    this.employeeService.getEmployeeById(id).subscribe((data) => {
      this.employeeForm.patchValue({
        fname: data.fname,
        lname: data.lname,
        age: data.age,
        email: data.email,
      });

      this.employeeForm.controls['company'].setValue(data.company.name);
    });
  }

  /**
   * @description initialize the employee form
   */
  private initFilterForm(): void {
    // filter form
    this.employeeForm = this.fb.group({
      fname: ['', Validators.nullValidator],
      lname: ['', Validators.nullValidator],
      age: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      company: ['', Validators.nullValidator],
    });
  }

  /**
   * @description Success message
   * @param msg
   */
  private success(msg: string) {
    this.snackbarService.success(msg);
  }

  /**
   * @description Error message
   * @param errorResponse
   */
  private error(errorResponse: string) {
    this.snackbarService.error(errorResponse);
  }
}
