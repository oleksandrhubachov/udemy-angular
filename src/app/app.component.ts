import {Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post.model';
import {PostsService} from './posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isLoading = false;
  error = null;
  private errorSubscription: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSubscription = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData);
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
      this.error = null;
    }, (error) => {
      this.error = error.error.error;
      this.isLoading = false;
    });
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

}
