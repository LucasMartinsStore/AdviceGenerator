import { IsInternetService } from './../../shared/service/is-internet/is-internet.service';
import { TextStatic } from './../../shared/text-static/text-static';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-internet',
  standalone: true,
  imports: [],
  templateUrl: './no-internet.component.html',
  styleUrl: './no-internet.component.scss',
})
export class NoInternetComponent implements OnInit {
  title = TextStatic.TITLE_NO_INTERNET;
  content = TextStatic.NO_INTERNET_CONTENT;
  button = TextStatic.BUTTON_NO_INTERNET;
  constructor(private isInternetService: IsInternetService) {}

  ngOnInit(): void {
    this.isInternetService.isVerifyConnection();
  }
}
