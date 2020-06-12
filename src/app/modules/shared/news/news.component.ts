import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FeedService } from 'src/app/services/feed/feed.service';
import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [FeedService],
})

export class NewsComponent implements OnInit {
  feed: Feed;
  section: string;

  constructor(private activatedRoute: ActivatedRoute, private feedService: FeedService) { 
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.section=data["section"];
    })
    this.getFeeds();
  }

  getFeeds(){
    this.feedService.getFeed().subscribe(feed =>{
      this.feed = feed;
      console.log(feed);
      this.feed.articles = feed.articles;
    });
  }
}