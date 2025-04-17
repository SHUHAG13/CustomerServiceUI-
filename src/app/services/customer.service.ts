import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl:string="https://localhost:7107/api/Customer";
  constructor(private http:HttpClient ) { }
  loadCustomerData(){
    return this.http.get(this.baseUrl);
  }

 createNewCustomer(customerObj:any){
    return this.http.post(this.baseUrl,customerObj);
  }
  updateCustomerData(customerObj:any){
    return this.http.put(this.baseUrl,customerObj);
  }
  deleteCustomerData(customerId:number){
    return this.http.delete(this.baseUrl+"/"+customerId);
  }
}
