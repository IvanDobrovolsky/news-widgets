import { API_URL }                  from "./constants";
import { ApiService, PostsService } from "./services";

class WidgetApp {

    private htmlContainer = document.querySelector("content");

    constructor (private apiService: ApiService <Post> ) {
        this.apiService
            .getData()
            .then(this.renderPosts.bind(this))
            .catch(this.reportError);
    }

    private renderPosts (posts: Array<Post>): void {
        for (let post of posts) {
            this.htmlContainer.innerHTML += PostsService.getSinglePostTemplate(post);
        }
    }

    private reportError (status: number): void {
        throw new Error (`Something bad has happened, status: ${status}!`);
    }
}

const widgetApp = new WidgetApp(new ApiService <Post> (API_URL, PostsService.extractPosts));