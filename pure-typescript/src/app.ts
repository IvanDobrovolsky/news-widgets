import { API_URL }                  from "./constants";
import { ApiService, PostsService } from "./services";

class WidgetApp {
    constructor (private apiService: ApiService <Post> ) {

    }

    public initialize (): void {
        this.apiService
            .getData()
            .then(this.render)
            .catch(this.reportError);
    }

    private render (data: Array<Post>) {
        console.log(data);
    }

    private reportError (status: number): void {
        throw new Error (`Couldn't fetch the data, status: ${status}!`);
    }
}

const widgetApp = new WidgetApp(new ApiService <Post> (API_URL, PostsService.extractPosts));
widgetApp.initialize();