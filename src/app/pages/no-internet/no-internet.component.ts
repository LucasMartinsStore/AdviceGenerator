import { TextStatic } from './../../shared/text-static/text-static';
import { Component } from '@angular/core';

@Component({
  selector: 'app-no-internet',
  standalone: true,
  imports: [],
  templateUrl: './no-internet.component.html',
  styleUrl: './no-internet.component.scss',
})
export class NoInternetComponent {
  title = TextStatic.TITLE_NO_INTERNET;
  content = TextStatic.NO_INTERNET_CONTENT;
}
