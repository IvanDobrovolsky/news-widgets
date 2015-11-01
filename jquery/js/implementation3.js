$(function(){ //The code below executes once the page is loaded

    //The function takes a template url, an array of objects, and container property(simple css selector) in order to
    //render posts and append them to this container
    function renderPost(templateUrl, posts, container){
        $.get(templateUrl, function(template){
            $.tmpl(template, posts).appendTo(container);
        });
    }

    //url for getting the json data from(NY Times API)
    var url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144";

    //Asynchronous AJAX request using jQuery API
    $.ajax(url, {
        success: function(data){   //Data handling once the request was successful

            var posts = data.results;  //retrieving post items from the data

            var postsParameters = posts.map(function(post){ //for each retrieved item we create an object and
                // store its properties to render it further
                return { //here we can add some more parameters to add to the posts
                    link: post.url,                                                //post link
                    imageUrl: (((post.media[0])["media-metadata"])[2]).url,        //post image url
                    description: post.abstract,                                    //post description
                    title: post.title,                                             //post title
                    date: post.published_date                                      //post published date
                }
            });

            renderPost('templates/post.template.html', postsParameters, ".widget-container");   //Rendering all posts

            console.log("JSON document was successfully downloaded!"); //Success alert
        },
        error: function(){
            console.log("Unable to get the document!"); //Error error!
        }
    });

});