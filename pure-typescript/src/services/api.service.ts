//TODO make it global
type Response = any;


interface IApiService <T> {
    getData(): Promise<T[]>;
}

export class ApiService <T> implements IApiService <T> {

    public getData(): Promise<T[]> {
        return this.makeApiRequest();
    }

    constructor (private apiUrl: string, private extractionFunction: (response: Response) => Array<T>) {

    }

    private makeApiRequest(): Promise<T[]> {
        return new Promise((resolve: (data: Array<T>) => void, reject: (status: number) => void): void => {

            let  response: any;
            let  status: number;

            const xhr = new XMLHttpRequest();

            xhr.open("GET", this.apiUrl, true); //asynchronous get request
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    status = xhr.status;
                    if (status == 200) {
                        response = JSON.parse(xhr.responseText);    //parsing the json document to js object
                        resolve(this.mapResponseToDataSet(response));                          //data handling callback when the request status is ok
                    } else {
                        reject(status);  //error handling callback otherwise
                    }
                }
            };
            xhr.send();
        });
    }

    private mapResponseToDataSet(response: Response): Array<T> {
        return this.extractionFunction(response);
    }
}