import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  tabState: string = 'debit_card';

  ngOnInit(): void {
  }

  changeTab(value: string): void {
    this.tabState = value;
  }

  debitCardSubmit(){
    alert('Debit card payment successful');
  }

  creditCardSubmit(){
    alert('Credit card payment successful');
  }

  upiSubmit(){
    alert('Upi payment successful');
  }

  codSubmit(){
    alert('cod done');
  }

}
