import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.addEventListener('offline', () => this.checkedOnlineStatus());
  }

  checkedOnlineStatus() {
    if (!navigator.onLine) {
      this.router.navigateByUrl('/no-internet');
    }
  }
}
