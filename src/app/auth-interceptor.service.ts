import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request is on its own way');
    const modifiedRequest = req.clone({
      headers: req.headers.append('Authentication', 'Bearer my-token'),
      params: req.params
    });
    return next.handle(modifiedRequest);
  }

}
