import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookieGeneratorService } from './cookie-generator.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private generatedCookie: string;

  constructor(private cookieService: CookieService, private cookieGenerator: CookieGeneratorService) { }

  setAuthentication() {
    this.generatedCookie = this.cookieGenerator.generateCookie();
    this.cookieService.set('authToken', this.generatedCookie, 0.05);
  }

  isAuthenticated(): boolean {
    console.log(this.cookieService.get('authToken'));
    if (this.cookieService.get('authToken')) {
      return true;
    }
    return false;
  }
}
