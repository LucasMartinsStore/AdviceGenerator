import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IsInternetService {
  constructor(private router: Router) {}
  isVerifyConnection() {
    window.addEventListener('offline', () => {
      this.router.navigateByUrl('/no-internet');
    });
    window.addEventListener('online', () => {
      this.router.navigateByUrl('/');
    });
  }
}
