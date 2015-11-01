News widgets using NewYork Times API.

Implementation1: Vanilla javascript + bootstrap

    Using XMLHttpRequest object . It works in the following way:
    Yahoo Pipes provides us with its own API.
    We make http get request and json document is sent back.
    Then we parse JSON to javascript object and retrieve its properties we need.
    Of course, error handling is implemented as well.