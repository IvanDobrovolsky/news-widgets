export default class AjaxService{

    constructor(url){
        this.url = url;
    }

    makeAjaxRequest(){
        return new Promise((resolve, reject) => {

            let request = new XMLHttpRequest();

            request.open('GET', this.url, true); //async request
            request.onreadystatechange = function(){
                if(request.readyState == 4){
                    let status = request.status;
                    if(status == 200){
                        resolve(JSON.parse(request.responseText).results);
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
