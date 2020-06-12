import { Injectable } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';

import { Feed } from 'src/app/models/feed';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeedService {

    endpoint = 'http://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=89f3df09d19740e896806c016130044e';

    feed:Feed;

    headerDict = {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
    }
        
    requestOptions = {
        headers: new HttpHeaders(this.headerDict),
    }; 

    handleError(error: HttpErrorResponse){
        let errorMessage = "Unknown error!";
        if(error.error instanceof ErrorEvent){
        errorMessage = `Error: ${error.error.message}`;
        }else{
        errorMessage = `Error Code: ${error.status}\nMessage:${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

    getFeed(): Observable<any> {
        return this.http
        .get(this.endpoint);
    }

    constructor(private http: HttpClient) { 

    }
}