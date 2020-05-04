import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { OrderDetailService } from './order-detail.service';
import { OrderList } from '../models/order-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  providers: [
    OrderDetailService
  ]
})
export class OrderDetailComponent implements OnInit, AfterViewInit {

  orderId: number;
  orderItem: OrderList = new OrderList();
  public detailColumns: object[] = [];

  constructor(private service: OrderDetailService, private route: ActivatedRoute, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params.id
      this.getOrderById(this.orderId);
    });
  }

  ngAfterViewInit() {
    this.detailColumns = this.getDetailColumns();
    this.ref.detectChanges();
  }

  getOrderById(orderId: number) {
    this.service.getOrderById(orderId)
      .subscribe(orderItem => {
        this.orderItem = orderItem;

        console.log(this.orderItem)
      });
  }

  private getDetailColumns(): object[] {
    return [
      {
        name: 'Product',
        flexGrow: 0.5,
        prop: 'productName'
      },
      {
        name: 'unitPrice',
        flexGrow: 0.5,
        prop: 'unitPrice'
      },
      {
        name: 'quantity',
        flexGrow: 0.5,
        prop: 'quantity'
      },
    ];
  }

}
