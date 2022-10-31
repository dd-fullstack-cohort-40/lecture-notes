# HTTP, URLs, and REST

## HTTP
**http** - HyperText Transfer Protocol. The language that computers use to talk to each other over the web.
- developed by Tim Berners-Lee and his team at CERN, one of the foundational pieces that created the world wide web.
- revolves around a client/server model
    - **client** - the computer making the request
    - **server** - the computer listening for requests and then responding to them
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
    - https://http.cat

## Anatomy of a URL
Example: `https://www.mysite.com:80/my-group/some-file.html?param1=hello&param2=world`
- protocol - the way that a client and a server communicate
    - very first thing in a URL
    - most common is http:// or https://
    - occasionally sftp:// or others
    - (HTTP), subdomains (www), query strings (?name=chloe)
- **domain** - the location of the server. Will be translated (eventually) into an IP address. Consists of three parts:
    - `.com` - Top level domain
    - `mysite` - domain (yes, this is redundant with the whole)
    - `www.` - subdomains, which can be chained in sequence the part of a URL that correlates to an IP address
    - like IP address, is unique to a server
- **port** - the way the server knows which program(s) should be notified to process the incoming data
    - these are designated by number, and each listener/protocol is associated with a particular number
    - Default ports
        - 80 - is the default port for http://
        - 8080 - pseudo port for local http:// development
        - 443 - default port for https://
        - 8443 - pseudo port for local https:// development
        - 22 - default port for ssh
        - 3306 - MySQL
        - 2375/2376 - Docker
- **URL parameters** - these are how we pass items into files so that we can process them
    - Becoming less common. More frequent is to pass these as part of the routing.
- Further reading: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL

## REST and APIs
**REST** - REpresentational State Transfer. A universal design pattern for communication between servers
- standardized way of getting info from a server via http/https that doesn't have as much of the HTML cruft in the way – get JSON objects instead.
- every web developer knows https, therefore every web developer can easily access REST APIs
- This is what you are building for your capstone.
    - Database holds your information
    - Backend connects to your database and translates that information to JSON objects and **provides** that data via REST API
    - Frontend **consumes** that data and translates it from JSON to html
- If React/foo.js is a plug, REST is an outlet, and your back-end code is wiring
- Why separate back-end and front-end?  Why not just go directly from database to HTML?
    - easier for developers to specialize on one aspect - don't have to be experts in all of it
    - each part can be replaced individually
    - 