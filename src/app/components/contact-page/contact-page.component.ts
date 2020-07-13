import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  FormData: FormGroup;
  segmentArray: string[];
  messageView = false;
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

    this.navPath();

    /*this.contact.postMessage(FormData).subscribe((response) => {
      window.open('https://mailthis.to/confirm', '_blank');
      this.navPath();
      console.log(response);
    }, error => {
      console.warn(error.responseText);
      console.log({ error });
    });*/
  }

  setMessageView() {
    if(this.segmentArray.length === 2) {
      this.messageView = true;
    } else {
      this.messageView = false;
    }
    this.isLoading = false;
  }

  navPath() {
    this.route.navigate(['/contact-page/message-success']);
  }
}
