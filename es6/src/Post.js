export default class Post{

    compile(post = {}){
        return `<div class="single-post">
                        <a href="${post.link}" class="thumbnail">
                        <h1>${post.title}</h1>
                        <img src="${post.imageUrl}"/>
                        <p>${post.description}</p>
                        <p>${post.date}</p>
                        </a>
                    </div>`
    }




    render(post = {}, container = {}){
        container.innerHTML = post;
    }
}