News widgets using NewYork Times API(Yahoo Pipes API).

Implementation1: Vanilla javascript + bootstrap + NewYork Times APi

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

