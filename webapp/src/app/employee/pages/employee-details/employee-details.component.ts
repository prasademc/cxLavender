import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../../company/company.service';

import { Company } from '../../../company/company.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  companies: Company[] = []

  constructor(
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
  }

  filterChanged() {

  }

  private loadCompanies(): void {
    this.companyService.getAllCompanies().subscribe(
      data => {
        this.companies = data
      }
    );
  }

}
