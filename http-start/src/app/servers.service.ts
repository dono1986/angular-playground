import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class ServerService {
    
    
    constructor(private http: Http) {

    }

    storeServers(servers: any[]): Observable<any> {
        return this.http.post('https://udemy-ng-http-a6889.firebaseio.com/data.json', servers, null);
    }
}