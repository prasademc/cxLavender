import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Company } from './company.model';

import { environment } from '../../environments/environment';

@Injectable()
export class CompanyService {
  //root url
  private apiEndpoint = '';

  constructor(private httpClient: HttpClient) {
    this.apiEndpoint = environment.apiEndpoint + 'companies';
  }

  getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.apiEndpoint);
  }
}
