import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-application',
  templateUrl: './rental-application.component.html',
  styleUrls: ['./rental-application.component.css']
})
export class RentalApplicationComponent implements OnInit {

  FormData: FormGroup;
  segmentArray: string[];
  paymentView = false;
  isLoading = false;

  constructor(private builder: FormBuilder, private contact: ContactService, private route: Router) { }

  ngOnInit() {
    this.route.events.subscribe((val) => {
      let myString = this.route.url.substr(1);
      this.segmentArray = myString.split('/');
      this.setMessageView();
    });

    let myString = this.route.url.substr(1);
    this.segmentArray = myString.split('/');
    this.setMessageView();

    this.FormData = this.builder.group({ 
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormData) {
    this.isLoading = true;
    console.log(FormData);

    this.contact.postMessage(FormData).subscribe(response => {
      this.route.navigate(['/contact-page/message-success']);
      console.log('success');
    }, error => {
      console.warn(error.responseText);
      console.log({ error });
    });
  }

  setMessageView() {
    if(this.segmentArray.length === 2) {
      this.paymentView = true;
    } else {
      this.paymentView = false;
    }
    this.isLoading = false;
  }
}
