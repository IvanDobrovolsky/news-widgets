import { Post } from "./../models";

/**
 It is needed to extract posts array out of the response from the api server
 */
export class PostsService {
    public static extractPosts (response: Response): Array<Post> {
        return response.results.map((postFromResponse: PostFromResponse, index: number): Post => {
            return new Post(
                index,
                postFromResponse.title,
                (((postFromResponse.media[0])["media-metadata"])[1]).url,
                postFromResponse.abstract,
                postFromResponse.url,
                postFromResponse.published_date
            );
        });
    }

    public static getSinglePostTemplate (post: Post): string {
        return `<div class="post">
                    <h2 class="post-title">${post.title}</h2>
                    <img src=${post.img}>
                    <p class="post-description">${post.description}</p>
                    <a class="post-link" href=${post.link}>Read more</a>
                    <p class="post-date"> Publication date: ${post.date}</p>
                    <hr> <br> <br>
                </div>`
    }
}