### Ready

Asigna una función para correr después de que todo esta hecho mediante QCObject y después del evento window.onload. Úsalo para prevenir un error de objeto DOM 'indefinido'.

#### Uso:

```javascript
Ready(()=>{
  // My init code here!
});
```
Tenga en cuenta que si define los componentes dinámicos mediante el uso de una etiqueta "componente" en HTML, el contenido dinámico no activara eventos listos. Para atrapar el código cada vez que se carga un componente dinámico usa un método decontrolado hecho en su lugar.

Usaras implementación lista principalmente cuando quieras implementar QCObjects en conjunto con otro framework que lo necesite.
