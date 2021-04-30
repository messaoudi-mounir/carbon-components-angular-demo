import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/* If there is a 401 Unauthorized response the user is automatically logged out of the application,
 * all other errors are re-thrown up to the calling service so an alert with the error
 * can be displayed on the screen.
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log(`[Frontend Error] ${err.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`[Backend Error] code was: ${err.status}, body was: ${err.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(err);
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(this.handleError)
      );
  }
}