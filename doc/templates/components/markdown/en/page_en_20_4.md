# The QCObjects HTTP2 Built-In Server

The QCObjects HTTP2 Built-In Server will help you to test your application
in a local environment before to deploy to a production environment.
For production environment it is recommended to use QCObjects HTTP2 Built-In Server under Ubuntu 18.x or newer and NodeJS 12.x or newer.

### Start serving your files with QCObjects

To start using the QCObjects HTTP2 Built-In Server, you just go to your project path and execute the following command line in your bash shell:

```shell
> qcobjects launch mynewapp
```

or

```shell
> qcobjects-server
```

It will start serving the files inside the folder you are present, unsing a built-in HTTP2 Server with the default configuration settings.


### Principals of an N-Tier or Multitier architecture

QCObjects was designed to work into a professional environment. There are many ways and paradigms to use when you define your software architecture. One recommended is using a Multitier or N-Tier architecture.

The benefits of a Multitier or N-Tier architecture are scalability and reliability of the systems that are demanding higger impact and performance. To go deep into this concepts would unnecessary enlarge this reference document but you can read more about this concepts in the following external links (only for reference and study):

- [Miltitier Architecture](https://en.m.wikipedia.org/wiki/Multitier_architecture)
- [3 Tier Architecture](https://www.tonymarston.net/php-mysql/3-tier-architecture.html)
- [Milti Tier Application](https://www.techopedia.com/definition/23599/multi-tier-application)
- [N Tier Architecture System Concepts and Tips](https://www.guru99.com/n-tier-architecture-system-concepts-tips.html)


### Micro-services Principals

The main goal of a microservice is that you can compact a fragment of backend functionality in a piece of code that can be called remotely from another backend or frontend terminal. Basically you can split a high level backend service into a multiple small micro-services that can complete the task. There are thousands of good examples of this kind of pattern adoption. You can read more about this concept in the following external links (only for reference and study):

- [Microservice Patterns](https://microservices.io)
- [Microservices on Wikipedia](https://en.wikipedia.org/wiki/Microservices)

With QCObjects you can code your microservices in a way more fancy, clean and quick.

### Backend settings in config.json

You can also use config.json in the backend side to make some tunning and custom settings for backend, specially useful for making the microservice routes.

Below is an example of a customised config.json file including the backend settings:

```json
{
  "documentRoot":"/home/qcobjects/projects/mynewapp/",
  "relativeImportPath":"js/packages/",
  "basePath":"/home/qcobjects/projects/mynewapp/",
  "projectPath":"/home/qcobjects/projects/mynewapp/",
  "domain":"mynewapp.qcobjects.com",
  "dataPath":"/etc/qcobjects/data/",
  "private-cert-pem":"/etc/letsencrypt/live/mynewapp.qcobjects.com/fullchain.pem",
  "private-key-pem":"/etc/letsencrypt/live/mynewapp.qcobjects.com/privkey.pem",
  "backend":{
    "routes":[
      {
        "path":"/createaccount",
        "microservice":"org.quickcorp.backend.signup",
        "responseHeaders":{}
      }
    ]
  }
}
```

### Backend routing

Inside your config.json file you can set the backend routes for your microservices.
For every microservice route, a path and a microservice package string is required.

```json
{
  "backend":{
    "routes":[
      {
        "path":"/createaccount",
        "microservice":"org.quickcorp.backend.signup"
      }
    ]
  }
}
```

When you set up the backend routes, the QCObjects HTTP2 Built-In Server will know how to handle the calls for every path defined. For every other path that is undefined by the backend routes settings, the server will handle the call with the default behavior, that is using a static file as response if it exists.
With that in mind you can use QCObjects either to manage and serve static files or dynamically served files when you need it.

### The QCObjects Microservice Class and Package

When you set up a backend route definition, you need to specify a microservice package. This microservice package is a QCObjects definition of a package with a Microservice class extended from a BackendMicroservice class already defined by QCObjects.

Below is an example of a microservice package definition, writen in the file org.quickcorp.backend.signup.js

```javascript
'use strict';
const fs = require('fs');

Package('cl.quickcorp.backend.signup',[
  Class('Microservice',BackendMicroservice,{
    body:{
      "jsonrpc": "2.0",
      "result": "",
      "id": 1
    },
    saveToFile: function (filename,data){
      logger.debug('Writing file: '+filename);
      fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    },
    post:function (data){
      let submittedDataPath = CONFIG.get('dataPath'); // this is filled out from qcobjects-server
      let filename = submittedDataPath+'signup/signup'+Date.now().toString()+'.json';
      console.log('DATA RECEIVED: '+data);
      this.saveToFile(filename,data);
    }
  })
]);

```

The above microservice is saving a file with the data received from a post request, and answering a jsonrpc 2.0 standard output. Read more about JSON RPC 2.0 Specification [here](https://www.jsonrpc.org/specification)

QCObjects HTTP2 Built-In Server will make a call to the post() method of the Microservice class definition only when a post request is made to the right path defined into the config.json referencing the name of the package as the initial indexing point of reference.

In order to allow QCObjects understand and execute your microservies in the right way, inside a microservice package, a Microservice class definition is required, and also the Microservice class definition must to extend the BackendMicroservice class that is a part of QCObjects built-in classes.


### Generating a Self-Signed Certificate with QCObjects

```shell
> qcobjects-createcert
```

### Working with a Letsencrypt HTTPS certificate, Certbot and QCObjects
