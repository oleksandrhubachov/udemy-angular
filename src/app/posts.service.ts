import {Post} from './post.model';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(postData: Post) {
    this.http
      .post<{[key: string]: Post}>(
        'https://ng-complete-guide-3c763.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('page', '0');
    return this.http.get<{[key: string]: Post}>(
      'https://ng-complete-guide-3c763.firebaseio.com/posts.json',
      {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          params: searchParams,
          responseType: 'json'
        }
      )
      .pipe(map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
          }
        }
        return postsArray;
      }),
      catchError(errorResponse => {
        return throwError(errorResponse);
      })
    );
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-3c763.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'json'
      }).pipe(tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
    }));
  }
}
