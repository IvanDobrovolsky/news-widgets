
export default class DataParsingService{

    constructor(posts=[]){
        this.posts = posts;
        this.parsedPosts = new Set();
    }

    parse(){
        for(let post of this.posts){
            this.parsedPosts.add({
                link: post.url,
                imageUrl: (((post.media[0])["media-metadata"])[2]).url,
                description: post.abstract,
                title: post.title,
                date: post.published_date
            });
        }


        return this.parsedPosts;
    }
}






