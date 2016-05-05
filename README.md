News widgets using NewYork Times API(Yahoo Pipes API).

Implementation1: Vanilla javascript + bootstrap + NewYork Times API

    Using XMLHttpRequest object . It works in the following way:
    Yahoo Pipes provides us with its own API.
    We make http get request and json document is sent back.
    Then we parse JSON to javascript object and retrieve its properties we need.
    Of course, error handling is implemented as well.


Implementation2: Vanilla javascript + jsonp protocol + bootstrap + Yahoo Pipes API

    Using JSONP protocol. It works in the following way.
    A server encodes data in JSON document and wraps it in a function invocation.
    Its name is the name we get from callback parameter in the url.
    JSON document is passed to the callback function and we simply parse and handle it.
    Note: The function has to be global!
    In order to avoid global namespace we are creating CallbackRegistry object and place the invoking function here
    And the callback function name changes as well. So now it is: CallbackRegistry.dataHandlerCallback

Implementation3: jquery + jquery templates + bootstrap + NewYork Times API

    Using jQuery library for manipulating the DOM and AJAX request.
    And also using jquery templates plugin for rendering the posts using templates and avoiding the js to generate
    code and DOM nodes without "templating".

Implementation4: angular + angular-material + NewYork Times API.

    Using $http.get() to make an asynchronous http request ang load data from NewYork Times API resource.
    Angular material framework was used to make a layout in material style.


Implementation5: Plain JavaScript + Handlebars + Fetch API + NewYork Times API.

    Using fetch API which returns a promise and handling it in a needed way. Also Handlebars were used to simplify rendering data.


Implementation6: EcmaScript 6 + Webpack + Bootstrap + NewYork Times API.

    Using some of new features that ES2005 brings to us and webpack as a build engine.
    
    
Implementation7: React.js + ES6 + Webpack + Node.js + React Hot Loader + ESLint + NewYork Times API.  
    
    Using modern stack of technologies for working with react. 


Implementation8: Angular2 + ES6 + TypeScript + NewYork Times API.  
    
    Using angular2-rc framework and its new and neat features. 
