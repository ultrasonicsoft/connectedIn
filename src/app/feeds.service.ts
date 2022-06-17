import { Injectable } from '@angular/core';
import { Post, randPost } from '@ngneat/falso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor() { }

  getFeeds(): Observable<Post[]> {
    return new Observable(observer => {
      observer.next(randPost({ length: 5 }));
      observer.complete();
    });
  }

}
