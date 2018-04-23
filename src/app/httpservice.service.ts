import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import { API_URL } from './../app.constants';

@Injectable()
export class ittpCommonService {
    API_URL = 'http://192.168.1.234:3000';
    constructor(private http: Http) {}
    httpcall(url: string, method: string, data?: any) {
        const header = new Headers({
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({headers: header});
        if (method !== 'put' && method !== 'post') {
            console.log(data, 'data')
            return this.http[method](this.API_URL + url, options, data)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
        } else {
            return this.http[method](this.API_URL + url, data, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
        }
    }
    httpformdatacall(url: string, method: string, data?: any) {
        console.log(url, method, data, 'looksfine')
        const header = new Headers({
            'x-access-token': localStorage.getItem('auth')
        });
        //    const options4 = new RequestOptions({ headers: header });
        if (method !== 'put' && method !== 'post') {
            return this.http[method](this.API_URL + url, data)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
        } else {
            return this.http[method](this.API_URL + url, data)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
        }
    }
    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
