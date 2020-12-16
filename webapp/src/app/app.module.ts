import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Import Shared
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { SnackbarService } from './common/services/snacker.service';

// Components
import { MainLayoutComponent } from './common/main-layout/main-layout.component';
import { EmployeeIndexComponent } from './employee/pages/employee-index/employee-index.component';
import { EmployeeDetailsComponent } from './employee/pages/employee-details/employee-details.component';
import { ConfirmComponent } from './common/confirm/confirm.component';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, EmployeeIndexComponent, EmployeeDetailsComponent, ConfirmComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    SnackbarService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
