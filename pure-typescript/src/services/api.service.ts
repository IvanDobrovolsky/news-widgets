export class ApiService <T> implements IApiService <T> {

    public getData(): Promise<T[]> {
        return this.makeApiRequest();
    }

    constructor (private apiUrl: string, private extractionFunction: (response: Response) => Array<T>) {

    }

    private makeApiRequest (): Promise<T[]> {
        return new Promise((resolve: (data: Array<T>) => void, reject: (status: number) => void): void => {

            let response: any;
            let status: number;

            const xhr = new XMLHttpRequest();

            xhr.open("GET", this.apiUrl, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    status = xhr.status;
                    if (status == 200) {
                        response = JSON.parse(xhr.responseText);
                        resolve(this.mapResponseToDataSet(response));
                    } else {
                        reject(status);
                    }
                }
            };
            xhr.send();
        });
    }

    private mapResponseToDataSet (response: Response): Array<T> {
        return this.extractionFunction(response);
    }
}