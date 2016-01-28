/**
 @class AjaxService
 @desc This functionality makes ajax request to the api service and returns needed data
 */

export default class AjaxService{

    constructor(apiUrl){
        this.url = apiUrl;
    }

    makeAjaxRequest(){
        return new Promise((resolve, reject) => {

            let request = new XMLHttpRequest();

            request.open('GET', this.url, true); //async request
            request.onreadystatechange = function(){
                if(request.readyState == 4){
                    let status = request.status;
                    if(status == 200){
                        resolve(JSON.parse(request.responseText));
                    }else{
                       reject(new Error(status));
                    }
                }
            };

            request.onerror = function(){
                reject(new Error("Error fetching results!"))
            };
            request.send();

        })
    }
}
