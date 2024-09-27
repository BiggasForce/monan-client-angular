import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //const localToken = window.sessionStorage.getItem('auth-user');
    req = req.clone({
      //withCredentials: true,
      //headers: req.headers.set('Authorization', 'bearer ' + localToken)
    });

    return next.handle(req);
  }
}

//const headers = req.headers.append('Authorization', myData);
 //   return next.handle(req.clone({ headers }));

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];