import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class ServerService {
    constructor(private http: Http) { // Injiziere HTTP

    }

    storeServers(servers: any[]): Observable<any> {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://udemy-ng-http-a6889.firebaseio.com/data.json',
                                servers,
                                {headers: headers});
    }

    getServers(): Observable<any> {
        return this.http.get('https://udemy-ng-http-a6889.firebaseio.com/data.json');
    }

    getServersTransformed(): Observable<any> {
        return this.http.get('https://udemy-ng-http-a6889.firebaseio.com/data.json')
            .pipe(map(
                (response: Response) => {
                    return response.json();
                }
            ))
            .pipe(catchError(
                (error: Response) => {
                    console.log(error);
                    return throwError('Something went wrong: ' + error);
                }
            ))
        ;
    }
}
