import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ],
  entryComponents: [
    NewCustomerComponent,
    EditCustomerComponent,
    DetailCustomerComponent
  ],
  declarations: [
    CustomerListComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    DetailCustomerComponent
  ]
})
export class CustomerModule { }
