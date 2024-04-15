import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextStatic } from '../../shared/text-static/text-static';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent {
  title = TextStatic.TITLE_NOT_FOUND;
  content = TextStatic.NOT_FOUND_CONTENT;
}
