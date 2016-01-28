
import {API_URL} from './config';
import DataParsingService from './services/DataParsingService';
import AjaxService from './services/AjaxService';
import Post from './Post';

let apiAjaxService = new AjaxService(API_URL);     //Ajax service instance to the API data vendor
let dataParsingService = new DataParsingService();

let container = document.querySelector('.widget-container');

apiAjaxService
    .makeAjaxRequest()
        //Catching api data
        .then((data) => {
            let postsObjects = dataParsingService.parse(data.results);
            for(let postObject of postsObjects){
                let post = new Post(postObject); //Creating an instance of a post
                post.render(container);          //Rendering the post
            }
        })
        //Catching errors
        .catch((error) => {
            throw new Error(error)
        });




