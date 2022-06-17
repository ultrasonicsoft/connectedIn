import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed-suggestions.component.html',
  styleUrls: ['./feed-suggestions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedSuggestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
