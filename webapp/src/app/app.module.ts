import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



// Import Shared
import { MaterialModule } from './material.module';
// routing module
import { AppRoutingModule } from './app-routing.module';

// Components
import { MainLayoutComponent } from './common/main-layout/main-layout.component';
import { EmployeeIndexComponent } from './employee/pages/employee-index/employee-index.component';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, EmployeeIndexComponent],
  imports: [BrowserModule, NoopAnimationsModule, HttpClientModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
