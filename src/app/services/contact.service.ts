import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // tookeywaldron999
  // https://formspree.io/mpzyoqlp
  // https://mailthis.to/jakeebee4171998
  // jakeUser99

  private api = 'https://mailthis.to/jakeebee4171998';

  constructor(private http: HttpClient) { }

  postMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map(
        (response) => {
          if(response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
