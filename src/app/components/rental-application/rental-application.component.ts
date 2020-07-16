import { Component, OnInit, forwardRef } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-rental-application',
  templateUrl: './rental-application.component.html',
  styleUrls: ['./rental-application.component.css']
})
export class RentalApplicationComponent implements OnInit {

  public payPalConfig ? : IPayPalConfig;
  segmentArray: string[];
  paymentView = false;
  isLoading = false;
  paidFor = false;
  showSuccess = false;

  constructor() { }

  ngOnInit() {
    this.paidFor = false;
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'USD',
    clientId: 'AQlJ-KfCd_4xjrPuSEsf08238ZOk3Z9arIfa2OrHM2kcfLrsWzqBF1vnhtwRxRUcsq7UyoyiXOpSp0vc',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '10',
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: '10'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'USD',
                value: '10',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'pay',
      layout: 'vertical',
      color: 'blue'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then(details => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }
}
