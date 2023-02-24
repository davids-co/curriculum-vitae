import { Component } from '@angular/core';

import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  providers: [MatSnackBar]
})
export class SnackbarComponent  {

  constructor(public snackBar: MatSnackBar) {
    this.snackBar.open('hello', 'world', { duration: 2000 });
  }

  openSnackBar(){
    this.snackBar.open('hello', 'world', { duration: 2000 });
  }
  
}
