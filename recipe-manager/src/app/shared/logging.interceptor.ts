import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Request ist immutable => Kopie erstellen und Parameter übergeben. WICHTIG: alte Requestparameter verwenden !!
        const copiedRequest = req.clone(/*{params: req.params.set('auth', 'MYTOKEN')}*/);

        return next.handle(copiedRequest).pipe(tap((res) => console.log('Logging interceptor: ', res) ));
        // oder null, wenn Request nicht weitergesendet werden soll
    }
}
