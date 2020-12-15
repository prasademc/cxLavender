import { Company } from '../company/company.model'

export interface Employee {
  id: string;
  fname: string;
  lname: string;
  age: number;
  email: string;
  company: Company;
}


