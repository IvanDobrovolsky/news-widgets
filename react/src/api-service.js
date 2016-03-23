
export default (url, success, error) => {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);  //asynchronous get request
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = JSON.parse(xhr.responseText);
                success && success({
                    success: true,
                    data
                });
            }else{
                error({
                    success: false,
                    message: "Cannot access the resource!"
                });
            }
        }
    };
    xhr.send();
}