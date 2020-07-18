import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private route: Router, private auth: AuthService, private modalService: ModalService) { }

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.modalService.setModal(true);
    this.route.navigate([''])
    return false;
  }
}
