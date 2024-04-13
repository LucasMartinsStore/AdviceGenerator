import { IsInternetService } from './../../shared/service/is-internet/is-internet.service';
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
  constructor(private isInternetService: IsInternetService) {}

  ngOnInit(): void {
    this.isInternetService.isVerifyConnection();
  }
}
