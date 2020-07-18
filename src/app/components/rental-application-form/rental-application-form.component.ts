import { Component, OnInit } from '@angular/core';
import { PaymentModalService } from 'src/app/services/payment-modal.service';

@Component({
  selector: 'app-rental-application-form',
  templateUrl: './rental-application-form.component.html',
  styleUrls: ['./rental-application-form.component.css']
})
export class RentalApplicationFormComponent implements OnInit {

  showModal = false;

  constructor(private paymentModalService: PaymentModalService) { }

  ngOnInit() {
    this.showModal = this.paymentModalService.getModal();
    this.paymentModalService.setModal(false);
  }

  closeModal() {
    this.showModal = false;
  }
}
