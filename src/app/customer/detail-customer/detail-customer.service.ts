import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AddOrEditCustomer } from '../models/AddOrEditCustomer';

@Injectable({
  providedIn: 'root'
})
export class DetailCustomerService {

  constructor(private http: HttpClient) { }

  getCustomerById(int: number): Observable<AddOrEditCustomer> {
    return this.http.get<AddOrEditCustomer>(`${environment.urlService}/customer/${int}`);
  }
}
