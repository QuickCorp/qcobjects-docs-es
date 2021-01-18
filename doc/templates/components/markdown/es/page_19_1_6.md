### [ArrayList or Array].sortBy

Ordena una lista de objetos por un valor de propiedad.


```javascript
let my_ordered_list = [
												{"b":1,"a":2},
												{"b":2,"a":1},
												{"b":3,"a":3},
											].sortBy("a")
// it will result in
[
	{ b: 2, a: 1 },
	{ b: 1, a: 2 },
	{ b: 3, a: 3 }
]
```
