import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Import Shared
import { MaterialModule } from './material.module';
// routing module
import { AppRoutingModule } from './app-routing.module';

// Components
import { MainLayoutComponent } from './common/main-layout/main-layout.component';
import { EmployeeIndexComponent } from './employee/pages/employee-index/employee-index.component';
import { EmployeeDetailsComponent } from './employee/pages/employee-details/employee-details.component';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, EmployeeIndexComponent, EmployeeDetailsComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
