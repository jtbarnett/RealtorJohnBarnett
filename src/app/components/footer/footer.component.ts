import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() position = 'relative';

  constructor() { }

  ngOnInit() {
    let element = document.getElementById('footer');
    element.style.position = this.position;
  }

  navProperties() {
    window.open('https://www.zillow.com/profile/JOHN-BARNETT/', '_blank');
  }
}
