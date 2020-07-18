import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showModal = false;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.showModal = this.modalService.getModal();
    this.modalService.setModal(false);
  }

  navProperties() {
    window.open('https://www.zillow.com/profile/JOHN-BARNETT/', '_blank');
  }

  closeModal() {
    this.showModal = false;
  }
}
