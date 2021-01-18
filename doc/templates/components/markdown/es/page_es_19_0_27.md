### serviceLoader

Carga una instancia de servicio y regresa a la promesa que es resuelta cuando los servicios han respondido exitosamente a la carga y rechazados cuando falla la respuesta de carga.

#### Uso:

```javascript
[Promise] serviceLoader(serviceInstance)
```

#### Ejemplo:

```javascript
Class('MyTestService',Service,{
    name:'myservice',
    external:true,
    cached:false,
    method:'GET',
    headers:{'Content-Type':'application/json'},
    url:'https://api.github.com/orgs/QuickCorp/repos',
    withCredentials:false,
    _new_:()=>{
      // service instantiated
    },
    done:()=>{
      // service loaded
    }
});
var service = serviceLoader(New(MyTestService,{
  data:{param1:1}
})).then(
  (successfulResponse)=>{
    // This will show the service response as a plain text
    console.log(successfulResponse.service.template);
  },
  (failedResponse)=>{

  });
```

