import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { OrderContainerService } from './order-container.service';
import { OrderList } from '../models/order-list';
import { TableViewComponent } from 'src/app/shared/table-view/table-view.component';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss'],
  providers: [
    OrderContainerService
  ]
})
export class OrderContainerComponent implements OnInit, AfterViewInit {
  orders: OrderList[] = [];
  public columns: object[] = [];
  public detailsColumns: object[] = [];
  @ViewChild('tableView') tableView: TableViewComponent<any>;
  @ViewChild('orderIdCellTemplate') private orderIdCellTemplate: TemplateRef<any>;
  @ViewChild('orderNumberCellTemplate') private orderNumberCellTemplate: TemplateRef<any>;
  numberOfRecords: number = 0;
  pageSizeOptions: number[] = [10, 20, 30];
  pageSize: number = 10;
  pageIndex: number = 0;
  isVisible: boolean = false;

  constructor(private service: OrderContainerService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.getOrders(1, 10);
  }

  ngAfterViewInit() {
    this.columns = this.getColumns();
    this.detailsColumns = this.getDetailsColumns();
    this.ref.detectChanges();
  }

  getOrders(page: number, rows: number) {
    this.isVisible = true;
    this.service.getOrderList(page, rows)
      .subscribe(orders => {
        this.orders = orders;
        this.numberOfRecords = orders[0].totalRecords;
        this.isVisible = false;
      });
  }

  private getColumns(): object[] {
    return [
      {
        name: 'Id',
        flexGrow: 0.5,
        cellTemplate: this.orderIdCellTemplate
      },
      {
        name: 'Customer',
        flexGrow: 1,
        prop: 'customer'
      },
      {
        name: 'Total',
        flexGrow: 0.5,
        prop: 'totalAmount'
      },
      {
        name: '# Order',
        flexGrow: 0.5,
        cellTemplate: this.orderNumberCellTemplate
      },
    ];
  }

  private getDetailsColumns(): object[] {
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
      }
    ];
  }

  toggleExpandRow(row) {
    this.tableView.toggleExpandRow(row);
    this.ref.detectChanges();
  }

  changePage(event: any): void {
    this.getOrders(event.pageIndex + 1, event.pageSize);
  }

}
