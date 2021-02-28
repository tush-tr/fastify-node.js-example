# Fastify Node.js Example API
In this repo I'm adding all about how I'm building an API using fastify package of node js.


### What is <a href="https://www.fastify.io/">fastify</a> ?
Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town.
<br>

## Core features
These are the main features and principles on which fastify has been built:

<li>Highly performant: as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 30 thousand requests per second.
<li>Extendible: Fastify is fully extensible via its hooks, plugins and decorators.
<li>Schema based: even if it is not mandatory we recommend to use JSON Schema to validate your routes and serialize your outputs, internally Fastify compiles the schema in a highly performant function.
<li>Logging: logs are extremely important but are costly; we chose the best logger to almost remove this cost, Pino!
<li>Developer friendly: the framework is built to be very expressive and to help developers in their daily use, without sacrificing performance and security.
<li>TypeScript ready: we work hard to maintain a TypeScript type declaration file so we can support the growing TypeScript community.


## Start working with fastify
Initialize a node project
```Bash
$ npm init -y
```

Get fastify with NPM:
```Bash
$ npm i fastify
```

creating the server file app.js and require fastify module

```javascript
const fastify = require("fastify");
const app = fastify();
```
 
Declare a route and add request method`
```javascript
app.get("/",(req,res)=>{
    res.send({name:"Tushar Rajpoot"});
})
```

Running the server on port 3500
```javascript
app.listen(3500,()=>{
    console.log("Server is running")
});  
```