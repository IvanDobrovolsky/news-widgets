var CallbackRegistry = {},

    url = "http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json&_callback=CallbackRegistry.dataHandlerCallback";

function makeScriptRequest(url, dataHandler, errorHandler){

    var callbackName = "dataHandlerCallback", //the name we get from the callback parameter in the url
        requestStateOk = false;               //request state flag

    CallbackRegistry[callbackName] = function(data){
        requestStateOk = true;                  //successful request
        delete CallbackRegistry[callbackName];  //cleaning the registry. We don't need this function anymore once the request is successful and we've got needed data
        dataHandler(data);                      //data handling
    };

    function checkCallback(){
        if(requestStateOk) return;             //if request was successful we don't invoke errorHandler and finish executing of this function
        delete CallbackRegistry[callbackName]; //otherwise we clean the object up
        errorHandler(url);                     //and invoke the error handler function
    }

    //Creating and appending the script element to the DOM
    var script = document.createElement('script');
    document.getElementsByTagName('body')[0].appendChild(script);
    script.onload = checkCallback;     //on load event handling
    script.onerror = checkCallback;    //on error event handling
    script.src = url;
}


//This function creates and renders a post
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
    postPicture.src = post.imgSrc;
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

function main(){
    makeScriptRequest(url, function (data) {
        var items = data.value.items;  //retrieving post items from the data
        console.log(data);

        var postsParameters = items.map(function(item){ //for each retrieved item we create an object and
                                                        // store its properties to render it further
            return { //here we can add some more parameters to add to the posts
                title: item.title,                //post title
                description: item.description,    //post description
                link: item.link,                  //post reference
                imgSrc: item.enclosure.url,       //post image source
                date: item.pubDate                //post publication date
            }
        });

        postsParameters.forEach(function(post) { //rendering all posts
            renderPost(post);
        });

    }, function (url) {
        console.log("Cannot load data from the " + url); //In case we've got an error
    });
}

window.addEventListener('load', main, false);  //executes main function once the window is loaded