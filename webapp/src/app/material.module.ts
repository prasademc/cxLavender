import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule
    ],
    providers: [],
})
export class MaterialModule { }
