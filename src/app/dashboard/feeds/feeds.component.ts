import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsService } from 'src/app/feeds.service';
import { Observable } from 'rxjs';
import { Post } from '@ngneat/falso';
import { FeedEntryComponent } from './feed-entry/feed-entry.component';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { FeedSuggestionsComponent } from './feed-suggestions/feed-suggestions.component';

@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [
    CommonModule,
    FeedEntryComponent,
    ProfileOverviewComponent,
    FeedSuggestionsComponent,
  ],
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  feeds$!: Observable<Post[]>;

  constructor(private feedsService: FeedsService) { }

  ngOnInit(): void {
    this.feeds$ = this.feedsService.getFeeds();
    console.debug('👉🏽 ',);
  }

}
