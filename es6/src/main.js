
import {API_URL, MAX_POSTS_COUNT} from './config';
import DataParsingService from './services/DataParsingService';
import AjaxService from './services/AjaxService';
import TemplateService from './services/TemplateService'
import Post from './Post';


let apiAjaxService = new AjaxService(API_URL);
let post = new Post();
console.log(post.compile({
    title: "Hello!"
}));

let container = document.querySelector('.widget-container');

post.render();
apiAjaxService
    .makeAjaxRequest()
        .then((results) => {
            let dataParsingService = new DataParsingService(results);
            let posts = dataParsingService.parse();
            for(let singlePost of posts){
                let compiled = post.compile(singlePost);
                console.log(compiled);
                container.innerHTML += compiled;
            }
        })
        .catch((error) => {
            throw new Error(error)
        });




