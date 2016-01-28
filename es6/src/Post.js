/**
 @class Post
 @desc This functionality is for creating a single instance of post and rendering it
 */

export default class Post{

    constructor(post){

        this.post = post;
        this.template = `<div class="single-post">
                            <a href="${this.post.link}" class="thumbnail">
                            <h1>${this.post.title}</h1>
                            <img src="${this.post.imageUrl}"/>
                            <p>${this.post.description}</p>
                            <p>${this.post.date}</p>
                            </a>
                        </div>`
    }

    render(container = {}){
        container.innerHTML += this.template;
    }
}