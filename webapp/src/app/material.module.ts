import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
})
export class MaterialModule {}
