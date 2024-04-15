import { Slip } from './../../interface/slip.interface';
import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../../shared/service/advice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  slipList!: Slip;
  isLoading = false;

  constructor(private adviceService: AdviceService) {}
  ngOnInit(): void {
    this.getAdvice();
  }

  getAdvice() {
    this.isLoading = true;
    this.adviceService.getSlip().subscribe({
      next: (data: Slip) => {
        this.slipList = data;
        this.isLoading = false;
      },
    });
  }
}
