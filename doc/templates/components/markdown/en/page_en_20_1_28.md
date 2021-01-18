# JSONService
Is a built-in definition for a JSON Service Class

#### Properties

**[JSONService].domain**
Returns a string with the domain of your application. It is automatically set by QCObjects at the load time.

**[JSONService].basePath**
Returns a string with the base path url of your application. It is automatically set by QCObjects at the load time.

**[JSONService].url**
Is a string representing the entire url of the service. It can be absolute or relative to the basePath when it applies. It can be also an external url.

NOTE: To load a service of an external resource you need to specify the external parameter to true using serviceLoader.

**[JSONService].name**
Is a string representing the name of a component. The name of a service can be any alphanumeric value that identifies the service instance. It isn't a unique ID but only a descriptive name.

**[JSONService].method**
Is a string representing a HTTP or HTTPS method. Possible values are: "GET", "POST", "PUT", ... any other that is accepted by REST services calls.

**[JSONService].data**
Is an object representing the data of the service. When QCObjects loads a service. It receives the response and interpretes it as a  template. So once a service response is obtained, it will get every property of data object and bind it to a template label representing the same property inside the template content between double brakets (example: {{prop1}} in the template content will represent data.prop1 in the service instance).


**[JSONService].cached**
Is a boolean value that tells QCObjects if the service response needs to be cached or not. When a service is cached, the template content loaded from the service url will be loaded only once. You have to set this value to false for every Service instance you define in order to asure the service is loaded from the resource but not the storage cache.

#### Methods
**[JSONService].set('prop',value)**
Sets a value for a service property.

**[JSONService].get('prop')**
Returns the value of a service property

#### Example:
```javascript
Class('MyTestJSONService',JSONService,{
    name:'myJSONservice',
    external:true,
    cached:false,
    method:'GET',
    withCredentials:false,
    url:'https://api.github.com/orgs/QuickCorp/repos',
    _new_:function (){
      // service instantiated
      delete this.headers.charset; // do not send the charset header
    },
    done:function (result){
      _super_('JSONService','done').call(this,result);
    }
});
var service = serviceLoader(New(MyTestJSONService,{
  data:{param1:1}
})).then(
  (successfulResponse)=>{
    // This will show the service response as a JSON object
    console.log(successfulResponse.service.JSONresponse);
  },
  (failedResponse)=>{

  });
```
