import { Slip } from './../../interface/slip.interface';
import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../../shared/service/advice.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  slipList!: Slip;

  constructor(private adviceService: AdviceService) {}
  ngOnInit(): void {
    this.adviceService.getSlip().subscribe((data: Slip) => {
      console.log(data);
      this.slipList = data;
    });
  }

  getAdvice() {}
}
