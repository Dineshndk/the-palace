import {
  HttpEvent,HttpInterceptor,HttpHandler,
  HttpRequest,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, timeout } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
@Injectable()
export class serverErrorInterceptor implements HttpInterceptor {
  constructor(private toastr:ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {//: Observable<HttpEvent<any>>
    const modified = req.clone({
      setHeaders: { 'X-Request-Timeout': `2000` }
    });

    return next.handle(modified).
    pipe(
      //timeout(2000),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.toastr.warning('Resource not found');
        }
        else if (error.status === 400) {
            this.toastr.warning('Something wrong with the request, please correct it and send it again.');
          }
           else if (error.status === 500) {
          this.toastr.error('Server error');
        } else {
          this.toastr.error('Error while connecting to the server.');
        }
          // Updated throwError to pass a function
          return throwError(() => new Error(error.message));
      })
    );
  }
}