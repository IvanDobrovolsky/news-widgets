
import {API_URL, MAX_POSTS_COUNT} from './config';
import DataProcessingService from './services/DataProcessingService';
import AjaxService from './services/AjaxService';
import TemplateService from './services/TemplateService'
import Post from './Post';

let dataProcessingService = new DataProcessingService();
let apiAjaxService = new AjaxService(API_URL);
let post = new Post(["JavaScript"]);

dataProcessingService.handle();

apiAjaxService
    .makeAjaxRequest()
        .then((results) => console.log(results))
        .catch((error) => console.log(`Error: ${error}`));
