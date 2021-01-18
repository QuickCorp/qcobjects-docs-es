# Timer

**Timer** is a special implementation of **requestAnimationFrame** to emulate the creation of thread instances, so you can handle runtime paralell processing in a little bit more efficient way.

NOTE: As it is currently depending in requestAnimationFrame availability it only works on modern browsers.

#### Example:

```javascript
Timer.thread({
		duration:300, // duration in milliseconds
		timing(timeFraction,elapsed){
			return timeFraction; // you can change this line to return a custom math function for timing
		},
		intervalInterceptor(progress){
			if (progress>=100){
				// do whatever you want here
			}
		}
});
```
