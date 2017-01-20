import { Post } from "./../models/post.model";

/**
 It is needed to extract posts array out of the response from the api server
 */
export class PostsService {
    //TODO use Response type instead of any
    public static extractPosts (response: any): Array<Post> {
        return response.results.map((post: any, index: number): Post => {
            return {
                id: index,
                link: post.url,
                img: (((post.media[0])["media-metadata"])[1]).url,
                description: <string>post.abstract,
                title: post.title,
                date: <Date>post.published_date
            }
        });
    }
}