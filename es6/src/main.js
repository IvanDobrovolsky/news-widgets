
import {API_URL, MAX_POSTS_COUNT} from './config';
import DataParsingService from './services/DataParsingService';
import AjaxService from './services/AjaxService';
import TemplateService from './services/TemplateService'
import Post from './Post';


let apiAjaxService = new AjaxService(API_URL);

apiAjaxService
    .makeAjaxRequest()
        .then((results) => {
            let dataParsingService = new DataParsingService(results);
            console.log(dataParsingService.parse());
        })
        .catch((error) => {
            throw new Error(error)
        });
