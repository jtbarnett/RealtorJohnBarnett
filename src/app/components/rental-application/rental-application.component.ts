import { Component, OnInit, forwardRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PayPalProcessor, OnApprove, OrderRequest } from '../../paypal';
import { OnApproveData, OnApproveActions, OnCancelData, OnErrorData  } from '../../paypal/types/buttons';

@Component({
  selector: 'app-rental-application',
  templateUrl: './rental-application.component.html',
  styleUrls: ['./rental-application.component.css'],
  providers: [ { provide: PayPalProcessor, useExisting: forwardRef(() => AppComponent) }]
})
export class RentalApplicationComponent implements OnInit, OnApprove {

  segmentArray: string[];
  paymentView = false;
  isLoading = false;
  paidFor = false;

  // Paypal properties
  width = 220;
  height = 35;
  shape = 'rect';
  color = 'black';
  label = 'pay';
  layout = 'vertical';
  order: OrderRequest = {
    intent: 'CAPTURE', 
    purchase_units: [{
      custom_id: 'wallet10',
      amount: {
        currency_code: 'USD',
        value: '10'
      }
    }]
  };

  constructor() { }

  ngOnInit() {
    this.paidFor = true;
  }

  // Paypal methods
  onApprove(data: OnApproveData, actions: OnApproveActions) {
    console.log('Transaction Approved:', data);

    // My setting for loading page
    this.paidFor = true;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    // Captures the trasnaction
    return actions.order.capture().then(details => {
      console.log('Transaction completed by', details);
      // Call your server to handle the transaction
      return Promise.reject('Transaction aborted by the server');
    });
  }

  onCancel(data: OnCancelData) {
    console.log('Transaction Cancelled:', data); 
  }

  onError(data: OnErrorData) { 
    console.log('Transaction Error:', data); 
  }
}
