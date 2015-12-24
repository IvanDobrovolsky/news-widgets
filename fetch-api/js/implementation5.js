(function () {
    "use strict";

    //The function compiles template and data into plain html code
    function compileTemplate(templateScript, data){
        return Handlebars.compile(templateScript)(data);
    }

    //The function makes a request using Fetch API
    function getData(url){
        return fetch(url);
    }

    //Function that parses response and retrieves needed data from it
    function parseResponse(data){
        return data.results.map(function (post) {
            return {
                link: post.url,
                imageUrl: (((post.media[0])["media-metadata"])[2]).url,
                imageWidth: (((post.media[0])["media-metadata"])[2]).width,
                description: post.abstract,
                title: post.title,
                date: post.published_date
            }
        })
    }


    function main(){

        var apiUrl = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144",
            postTemplate = document.getElementById('post-template').innerHTML,
            postContainer = document.getElementsByClassName('widget-container')[0];


        getData(apiUrl)
            //Response handler
            .then(
                function (response){
                    //If a response is not successful
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    //Handling response data
                    response.json().then(function (data) {
                        postContainer.innerHTML = compileTemplate(postTemplate, {posts: parseResponse(data)});
                    })
                }
            )
            //Error handler
            .catch(function (error) {
                console.error("Something went wrong: " + error);
            })
            .finally(function () {
                console.log("The process is finished!");
            })
    }

    //Main function executes once the page is loaded
    main();

}());