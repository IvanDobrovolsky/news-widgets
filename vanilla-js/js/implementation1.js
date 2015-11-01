(function(){
    //implementation of the module in order to avoid global namespaces

    //url for getting the json data from
    var url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144";

    //this function creates and renders a single post
    function renderPost(post){ //here we pass an object with post parameters needed to render the post
        //creating new elements of the layout
        var postContainer = document.createElement('div'),
            postTitle = document.createElement('h1'),
            postPicture = document.createElement('img'),
            postLink = document.createElement('a'),
            postDescription = document.createElement('p'),
            postPublicationDate = document.createElement('p');

        //setting proper attributes to the html tags of the layout
        postContainer.className = "single-post "; // here you can add bootstrap classes
        postTitle.innerHTML = post.title;
        postLink.setAttribute('href', post.link);
        postLink.setAttribute('target', '_blank');
        postLink.className = 'thumbnail';         // bootstrap thumbnail class
        postPicture.setAttribute('src', post.imageUrl);
        postDescription.innerHTML = post.description;
        postPublicationDate.innerHTML = "Published: " + post.date;


        //Appending elements to the DOM
        postLink.appendChild(postTitle);
        postLink.appendChild(postPicture);
        postLink.appendChild(postDescription);
        postLink.appendChild(postPublicationDate);
        postContainer.appendChild(postLink);
        document.getElementsByClassName('widget-container')[0].appendChild(postContainer);
    }

    //XMLHttpRequest - for getting the JSON data from the resource via a given url
    function getData(url, successHandler, errorHandler){
        var data, status;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true); //asynchronous get request
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                status = xhr.status;
                if(status == 200){
                    data = JSON.parse(xhr.responseText);    //parsing the json document to js object
                    successHandler && successHandler(data); //data handling callback when the request status is ok
                }else{
                    errorHandler && errorHandler(status);  //error handling callback otherwise
                }
            }
        };
        xhr.send();
    }

    function main(){ //main function
        getData(url, function(data){       //data handling
            var items = data.results;  //retrieving post items from the data

            var postsParameters = items.map(function(post){ //for each retrieved item we create an object and
                // store its properties to render it further
                return { //here we can add some more parameters to add to the posts
                    link: post.url,                                                //post link
                    imageUrl: (((post.media[0])["media-metadata"])[2]).url,        //post image url
                    description: post.abstract,                                    //post description
                    title: post.title,                                             //post title
                    date: post.published_date                                      //post published date
                }
            });

            console.log(postsParameters);
            postsParameters.forEach(function(post) { //rendering all posts
                renderPost(post);
            });
            console.log("JSON document was successfully gotten!"); //successful request
        }, function () {                                           //error handling callback
            console.log("Unable to get the document!");
        });
    }

    window.addEventListener('load', main, false);  //final event handler

})();