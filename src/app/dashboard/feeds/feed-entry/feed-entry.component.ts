import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '@ngneat/falso';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-feed-entry',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './feed-entry.component.html',
  styleUrls: ['./feed-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedEntryComponent implements OnInit {

  @Input() feed!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
