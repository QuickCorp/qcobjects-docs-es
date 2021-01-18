### Método QC_Append, append

Este es un método especial que hará tu vida mas fácil cuando quieras manipular el **DOM** dinámicamente. Puedes insertar un componente incluso **Component**, a un objeto **QCObjects** o a el elemento **DOM** dentro de otro **HTMLElement**.

##### Uso:

```javascript
[element].append([object or element]);
```
#### Ejemplo:

```javascript
// This will create a QCObjects class named "canvas" extending a HTMLCanvasElement with a customAttr property that has a "custom" value
Class('canvas',HTMLCanvasElement,{
  customAttr:'custom'
});

// This will declare an instance canvas1 from the class canvas
let canvas1 = New(canvas,{
            width:100,
            height:100,
          });

// This will append the canvas1 object to the document body
document.body.append(canvas1);

```


