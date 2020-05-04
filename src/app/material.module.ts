import { NgModule } from '@angular/core';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatPaginatorModule, MatDialogModule, MatIconModule, MatTooltipModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
