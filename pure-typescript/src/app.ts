//TODO add index files for models and services
import { ApiService } from "./services/api.service";
import { Post } from "./models/post.model";

class WidgetApp {
    private readonly apiUrl = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144';

    constructor (private apiService: ApiService <Post> ) {

    }

    public initialize (): void {

        this.apiService
            .getData(this.apiUrl)
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

const widgetApp = new WidgetApp(new ApiService <Post> ());
widgetApp.initialize();