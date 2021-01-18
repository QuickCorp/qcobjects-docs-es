#### Backend routing

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
