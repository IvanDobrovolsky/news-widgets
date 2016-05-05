import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Post }           from './post.model';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class WidgetService{
    constructor(private http: Http){}

    private apiUrl = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144';
    abstract;
    published_date;

    public getPosts(): Observable<Post[]>{
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.apiUrl)
                        .map(this.extractData)
                        .catch(this.handleError)
    }


    private extractData(response: Response){
        if(response.status < 200 || response.status >= 300){
            throw new Error(`Bad response status: ${response.status}`);
        }

        const body = response.json();

        return body.results.map(post => {
            return {
                link: post.url,
                img: (((post.media[0])["media-metadata"])[2]).url,
                description: <string>post.abstract,
                title: post.title,
                date: <Date>post.published_date
            }
        });

    }

    private handleError(error: any = 'Server Error'){
        console.error(error.message);
        return Observable.throw(error.message);
    }


}