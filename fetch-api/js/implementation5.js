(function () {
    "use strict";

    //The function compiles template and data into plain html code
    function compileTemplate(templateScript, data){
        return Handlebars.compile(templateScript)(data);
    }


    function main(){
        var postTemplate = document.getElementById('post-template').innerHTML,
            postContainer = document.getElementsByClassName('widget-container')[0];

        var data =  {
            posts: [{description: 1}, {description: 2}, {description: 3}]
        };

        console.log(compileTemplate(postTemplate, data));

        postContainer.innerHTML = compileTemplate(postTemplate, data);
    }

    //Main function executes once the page is loaded
    main();
}());