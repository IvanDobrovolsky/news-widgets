
import {API_URL, MAX_POSTS_COUNT} from './config';
import DataProcessor from './DataProcessingService';
import AjaxService from './AjaxService';

let dataProcessor = new DataProcessor();
let ajaxService = new AjaxService();

dataProcessor.handle();
ajaxService.makeAjaxCall();