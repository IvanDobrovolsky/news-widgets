//TODO add index files for models and services
import { ApiService } from "./services/api.service";
import { PostsService } from "./services/posts.service";

const API_URL = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144';

import { Post } from "./models/post.model";

class WidgetApp {
    constructor (private apiService: ApiService <Post> ) {

    }

    public initialize (): void {

        this.apiService
            .getData()
            .then(this.render)
            .catch(this.reportError);
    }

    private render (data: any) {
        console.log(data);
    }

    private reportError (status: number): void {
        throw new Error (`Couldn't fetch the data, status: ${status}!`);
    }
}

const widgetApp = new WidgetApp(new ApiService <Post> (API_URL, PostsService.extractPosts));
widgetApp.initialize();