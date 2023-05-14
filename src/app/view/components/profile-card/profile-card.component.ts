import { Component } from '@angular/core';
import { CONSTANTS } from 'src/app/utils/constans.util';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent   {
  constants = CONSTANTS;
}
