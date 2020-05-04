import { Component, OnInit, Inject } from '@angular/core';
import { DetailCustomerService } from './detail-customer.service';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../edit-customer/edit-customer.component';
import { AddOrEditCustomer } from '../models/AddOrEditCustomer';

export interface DialogRef {
  id: number
}

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss'],
  providers: [DetailCustomerService]
})
export class DetailCustomerComponent implements OnInit {
  customer: AddOrEditCustomer = new AddOrEditCustomer();

  constructor(private service: DetailCustomerService, private fb: FormBuilder,
    private dialogRef: MatDialogRef<DetailCustomerComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.customerRetrieved(data.id);

      console.log("customer", this.customer);
  }

  ngOnInit() {
  }

  customerRetrieved(id: number): void {
    this.service.getCustomerById(id)
      .subscribe(customer => {
        this.customer = customer;
      });
  }

}
