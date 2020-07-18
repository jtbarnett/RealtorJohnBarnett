import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { PaymentModalService } from 'src/app/services/payment-modal.service';

@Component({
  selector: 'app-rental-application',
  templateUrl: './rental-application.component.html',
  styleUrls: ['./rental-application.component.css']
})
export class RentalApplicationComponent implements OnInit {

  public payPalConfig ? : IPayPalConfig;
  isLoading = false;

  constructor(private route:Router, private auth: AuthService, private paymentModalService: PaymentModalService) { }

  ngOnInit() {
    this.isLoading = false;
    this.initConfig();
  }
  private initConfig(): void {
    this.payPalConfig = {
    currency: 'USD',
    // Test: AQlJ-KfCd_4xjrPuSEsf08238ZOk3Z9arIfa2OrHM2kcfLrsWzqBF1vnhtwRxRUcsq7UyoyiXOpSp0vc
    // Live: AWKlkk89fyGgqBewwac87de0EtdqH6rGrtCHWBfLyC0w0tF8YTh6sXXxh9VrLdQOrXkdkAlKwRD5WQer
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
              name: 'Rental Application',
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
      this.isLoading = true;
      this.auth.setAuthentication();
      this.paymentModalService.setModal(true);
      setTimeout(() => {
        this.isLoading = false;
        this.route.navigate(['/rental-application-form']);
      }, 3000);
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
