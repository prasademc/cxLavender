import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Company } from './company.model';

@Injectable()
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>('/api/companies');
  }
}
