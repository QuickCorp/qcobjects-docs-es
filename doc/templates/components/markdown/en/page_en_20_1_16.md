# Import
Imports a package from another JS file

#### Usage:
```javascript
Import (packagename,[ready],[external]);
```
Where packagename is the name of the package, ready is a function that will be executed after the package is loaded, and external is a boolean value that indicates if the JS file is in the same origin or it is from another external resource.

#### Example (1):
```javascript
Import('org.quickcorp.main');
```
The above code will try to import a JS fila named 'org.quickcorp.main.js' from the path specified in the **relativeImportPath** settings value present in your **CONFIG**. Inside the JS file you have to define a package by using Package('org.quickcorp.main',[Class1, Class2...])

#### Example (2):
```javascript
Import('org.quickcorp.main',function (){
  console.log('remote import is loaded');
},true);
```
The above code this time is trying to load the same package but using an external path defined by the **remoteImportsPath** setting present in your **CONFIG**

NOTE: In both examples above you have not use or specify the ".js" extension. This it's used by default and can't be changed by security reasons.
