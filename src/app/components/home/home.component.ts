import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  customerList:any[]=[];
  customerObj:any={
    "cstId": 0,
    "cstName": "",
    "cstAge": 0,
    "cstEmail": "",
    "cstAddress": ""
    }
     constructor(private cstService:CustomerService) {
      this.getAllCustomerData();

      }

 getAllCustomerData(){
  this.cstService.loadCustomerData().subscribe((data:any)=>{
    this.customerList=data;
  })
 }
 onSaveCustomerData(){
  this.cstService.createNewCustomer(this.customerObj).subscribe((res:any)=>{
    if(res){
      alert("Customer Created Successfully")
      this.getAllCustomerData();
      this.customerObj={
        "cstId": 0,
        "cstName": "",
        "cstAge": 0,
        "cstEmail": "",
        "cstAddress": ""
      }
    }
    else{
      alert("Customer Creation Failed")
    }
  })
 }

  onEditCustomerData(customer:any){
    this.customerObj=customer;
  }

  onUpdateCustomerData() {
    this.cstService.updateCustomerData(this.customerObj).subscribe(
      (res: any) => {
        if (res) {
          alert("Customer Updated Successfully");
          this.getAllCustomerData(); 
          this.customerObj={
            "cstId": 0,
            "cstName": "",
            "cstAge": 0,
            "cstEmail": "",
            "cstAddress": ""
          } 
        } else {
          alert("Customer Update Failed");
        }
      });
  }
  

  onDeleteCustomerData(customerId:number){
    this.cstService.deleteCustomerData(customerId).subscribe((res:any)=>{
      if(res){
        alert("Customer Deleted Successfully")
        this.getAllCustomerData();
      }
      else{
        alert("Customer Deletion Failed")
      }
    })
  }
  
  
}
