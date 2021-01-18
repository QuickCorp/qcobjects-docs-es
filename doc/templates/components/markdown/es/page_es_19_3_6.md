### The QCObjects Microservice Class and Package

cuando configuras la definicion de ruta bakend, necesitas especificar un paquete de microdervicio.Este paquete de microservicio es una definicion de QCObjects de un paquete con una clase microservicio extendida desde la clase BackendMicroservice ya definida por QCObjects.

A continuación se muestra un ejemplo de una definición de paquete de microservicio, escrita en el archivo org.qcobjects.backend.signup.js

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

El microservicio anterior está guardando un archivo con los datos recibidos de una solicitud posterior y respondiendo a una salida estándar jsonrpc 2.0. Lee sobre estas especificaciones  JSON RPC 2.0 [Aquí](https://www.jsonrpc.org/specification)

El servidor QCObjects HTTP2 Built-In hara una llamada al metodo post() de la definicion de clase Microservice solo cuadose realiza una solicitud posterior en la ruta correcta definida en config.json que hace referencia al nombre del paquete como el punto de referencia de indexación inicial.

Para permitir que QCObjects entienda y ejecute sus microservicios de la manera correcta dentro de un paquete de microservicios, una definicion de clase Microservice es requerida y tambine la definicion de clase  Microservice tiene que extender la clase BackendMicroservice que es parte de las clases built-in de QCObjects.

