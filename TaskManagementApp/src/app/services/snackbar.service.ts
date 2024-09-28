import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService
{

  constructor(private snackBar: MatSnackBar) { }

  open(message: string, action: string, customDuration = 6500)
  {

    let config = new MatSnackBarConfig();
    if (action === "success")
    {
      config.panelClass = ['success-snackbar'];
    } else if (action === "info")
    {
      config.panelClass = ['info-snackbar'];
    } else
    {
      config.panelClass = ['error-snackbar'];
    }

    config.duration = customDuration;
    config.horizontalPosition = 'center';
    config.verticalPosition = 'top'
    this.snackBar.open(message, 'x', config);
  }

  close()
  {
    this.snackBar.dismiss();
  }

}
