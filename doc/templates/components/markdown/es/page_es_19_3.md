## The QCObjects HTTP2 Built-In Server

El servidor HTTP2 Built-In de QCObjects te ayudara a probar tu aplicacion en un entorno local antes de implementarlo en un entorno de producción.
Para el entorno de producción, se recomienda utilizar el servidor QCObjects HTTP2 Built-In en Ubuntu 18.x o el mas nuevo y NodeJS 12.x o mas actual.

### Start serving your files with QCObjects

Para comenzar a utilizar el servior de QCObjects HTTP2 Built-In,solo necesitas ir a la ruta del proyecto y ejecutar la ssiguiente liniea de comandos en tu bash shell:

```shell
> qcobjects launch mynewapp
```

o

```
> qcobjects-server
```

Comenzara a servir los archivos dentro de la carpeta donde estas, usando el servidor built-in HTTP2 Server cin la configuracion predeterminada.

### Principals of an N-Tier or Multitier architecture

QCObjects fue diseñado para trabajar en un entorno profesional. Hay muchas formas y paradigmas para usar cuando define su arquitectura de software. Se recomienda  es usar una arquitectura Multitier o N-Tier.

Los beneficios de la arquitectura  Multitier o N-Tier son la escalabilidad y confiabilidad de los sistemas que exigen un mayor impacto y rendimiento. Para profundizar en estos conceptos sería innecesario ampliar este documento de referencia, pero puede leer más sobre estos conceptos en los siguientes enlaces externos(solo para referencia y estudio):

- [Arquitectura Miltitier ](https://en.m.wikipedia.org/wiki/Multitier_architecture)
- [Arquitectura 3 Tier ](https://www.tonymarston.net/php-mysql/3-tier-architecture.html)
- [Aplicacion Milti Tier ](https://www.techopedia.com/definition/23599/multi-tier-application)
- [Conceptos del sistema de arquitectura N Tier y Tips](https://www.guru99.com/n-tier-architecture-system-concepts-tips.html)


### Micro-services Principals

El objetivo principal de un microservicio es que puede compactar un fragmento de funcionalidad de back-end en un código que se puede llamar de forma remota desde otro terminal de back-end o frontend. Básicamente, puedes dividir un servicio de back-end de alto nivel en múltiples microservicios pequeños que pueden completar la tarea. Hay miles de buenos ejemplos de este tipo de adopción de patrones. Puede leer más sobre este concepto en los siguientes enlaces externos (solo para referencia y estudio):

- [Microservice Patterns](https://microservices.io)
- [Microservices on Wikipedia](https://en.wikipedia.org/wiki/Microservices)

Con QCObjects puedes codificar sus microservicios de una manera más elegante, limpia y rápida.

### Backend settings in config.json

También puedes usar config.json en el lado del backend para hacer algunos ajustes y configuraciones personalizadas para el backend, especialmente útil para hacer las rutas de microservicio.

A continuación se muestra un ejemplo de un archivo config.json personalizado que incluye la configuración del back-end:

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

Dentro de su archivo config.json puede establecer las rutas de back-end para sus microservicios.
Para cada ruta de microservicio, se requiere una ruta y una cadena de paquete de microservicio.

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

Cuando configuras las rutas de back-end, el servidor  QCObjects HTTP2 Built-In  sabra como manejar las llaadas de cada ruta definida. Para cada otra ruta que este indefinida mediante los ajustes del Back-end, el servidor se manejara para llamar al comportamiento por defecto que está usando un archivo estático como respuesta si existe.
 Con eso en mente puedes usar QCObjects tanto para administar y servir archivos estaticos o servicios servidos dinamicamente cuando lo necesites.

### The QCObjects Microservice Class and Package

cuando configuras la definicion de ruta bakend, necesitas especificar un paquete de microdervicio.Este paquete de microservicio es una definicion de QCObjects de un paquete con una clase microservicio extendida desde la clase BackendMicroservice ya definida por QCObjects.

A continuación se muestra un ejemplo de una definición de paquete de microservicio, escrita en el archivo org.quickcorp.backend.signup.js

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


### Generating a Self-Signed Certificate with QCObjects

```shell
> qcobjects-createcert
```

### Working with a Letsencrypt HTTPS certificate, Certbot and QCObjects
