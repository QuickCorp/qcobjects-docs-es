### Timer

**Timer** es una implementación especial de **requestAnimationFrame** para emular la creación de instancias de hilo, así puedes manejar runtime paralell processing en una manera un poquito más eficiente.

NOTA: Como depende de la dispoinibilidad de requestAnimationFrame solo funciona en browsers modernos.

#### Ejemplo:

```javascript
Timer.thread({
		duration:300, // duración en milisegundos
		timing(timeFraction,elapsed){
			return timeFraction; // puedes cambiar esta línea para devolver una función customizada para timing
		},
		intervalInterceptor(progress){
			if (progress>=100){
				// haz lo que quieras aquí
			}
		}
});
```
