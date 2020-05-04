import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierContainerComponent } from './supplier-container.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.enum';

const suppliterRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SupplierContainerComponent }
    ],
    canActivate: [AuthGuard],
    data: {expectedRole: Role.AdminSupplier}
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(suppliterRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SupplierRoutingModule { }
