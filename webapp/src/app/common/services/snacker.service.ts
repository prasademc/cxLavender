import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {

    private durationSeconds: number = 1000 * 120;

    constructor(private snackBar: MatSnackBar) {}

    public success(message: string): void {
        // show message
        this.snackBar.open(message, 'x', {
            duration: this.durationSeconds,
            panelClass: "snack-bar-success",
            horizontalPosition: 'left'
        });
    }

    public error(message: string): void {
        this.snackBar.open(message, 'x', {
            duration: this.durationSeconds,
            panelClass: "snack-bar-error",
            horizontalPosition: 'left'
        });
    }
}
