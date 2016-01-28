/**
 @class DataParsingService
 @desc This functionality parses api service response object and returns a set in an acceptable format

 */
export default class DataParsingService{

    constructor(){
        this.parsedPosts = new Set();
    }

    parse(posts){
        for(let post of posts){
            let parsedPost = {
                link: post.url,
                imageUrl: (((post.media[0])["media-metadata"])[2]).url,
                description: post.abstract,
                title: post.title,
                date: post.published_date
            };
            this.parsedPosts.add(parsedPost);
        }

        return this.parsedPosts;
    }
}






