interface IApiService <T> {
    getData(apiUrl: string): Promise<T[]>;
}

export class ApiService <T> implements IApiService <T> {

    public getData(apiUrl: string): Promise<T[]> {
        //TODO Remove the hack once data mapper service is implemented
        return <any> this.makeApiRequest(apiUrl);
    }

    private makeApiRequest(apiUrl: string): Promise<any> {
        return new Promise((resolve: (data: any) => void, reject: (status: any) => void): void => {

            let  data: any;
            let  status: number;

            const xhr = new XMLHttpRequest();

            xhr.open("GET", apiUrl, true); //asynchronous get request
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    status = xhr.status;
                    if (status == 200) {
                        data = JSON.parse(xhr.responseText);    //parsing the json document to js object
                        resolve(data);                          //data handling callback when the request status is ok
                    } else {
                        reject(status);  //error handling callback otherwise
                    }
                }
            };
            xhr.send();
        });
    }
}