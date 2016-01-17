
import {API_URL, MAX_POSTS_COUNT} from './config';
import DataProcessingService from './services/DataProcessingService';
import AjaxService from './services/AjaxService';

let dataProcessingService = new DataProcessingService();
let ajaxService = new AjaxService();

dataProcessingService.handle();
ajaxService.makeAjaxCall();