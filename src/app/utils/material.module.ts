import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatTooltipModule,
    
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatTooltipModule,
    
  ],
  declarations: [],
})
export class MaterialModuleImports { }
