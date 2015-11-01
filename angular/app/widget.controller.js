((function () {
    "use strict";

    angular
        .module("widget")
        .controller("WidgetController",       //WidgetController
        ["$scope", "$http", widgetController]);

    //WidgetControllerFunction
    function widgetController($scope, $http){

        //New York times API url for most popular posts about movies
        var url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144";

        //Asynchronous get request
        $http.get(url)
            .success(function(data){      //Data handling
                console.log(data);
                $scope.posts = data.results.map(function(post){
                    return {
                        link: post.url,
                        imageUrl: (((post.media[0])["media-metadata"])[2]).url,
                        imageWidth: (((post.media[0])["media-metadata"])[2]).width,
                        description: post.abstract,
                        title: post.title,
                        date: post.published_date
                    }
                });
                console.log($scope.posts);
            })
            .error(function () {          //Error handling
                console.log("An error occurred while downloading the document!" );
            });
    }
})());