import { NgModule } from '@angular/core';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatPaginatorModule, MatDialogModule, MatIconModule, MatTooltipModule, MatSidenavModule, MatProgressSpinnerModule } from '@angular/material';

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
    MatSidenavModule,
    MatProgressSpinnerModule
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
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule { }
