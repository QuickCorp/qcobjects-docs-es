# Principios

Aquí están Las directrices con lo que QCObjects fue hecho:

0. Deberá escribir en JavaScript para codificar una aplicación JavaScript.
1. Todo es un objeto.
2. Cada objeto tiene una definición.
3. En la interfaz, cualquier objeto puede ir apilado en el DOM o en el Virtual-DOM sin necesidad de redeclarar sus definiciones.
4. Cada objeto tiene un cuerpo.
5. La clase debería ser la definición principal de un objeto.
6. La clase debería ser fácilmente escrita como un objeto.
7. Tu Código debería estar fácilmente organizado en paquetes.
8. Debería ser posible escalar sus aplicaciones a una arquitectura limpia.
9. Un componente es una entidad que tiene un objeto como representación. El contenido de un componente debería ser posible rellenarlo remotamente como localmente. Como objeto el componente tiene cuerpo También y el cuerpo del componente es normalmente una instancia apilada del DOM element.
10. Un componente puede ser adjunto al DOM o separado del el sin afectar a su funcionalidad.
11. Un servicio de llamada puede ser extendido a escalar su funcionalidad.
12. Deberías ser capaz de importar un paquete remotamente.
13. Deberías poder escalar tu código y también controlar tus cambios en el servidor sin hacer llamadas innecesarias a fuentes remotas. No deberías necesitar codificar estos tipos de controles usted mismo.
14. Deberías ser capaz de codificar tu aplicación N-Tier en un solo lenguaje o sintaxis.
15. Deberías ser capaz de aplicar cualquier plantilla que quieras a un componente, no importa la sintaxis o el idioma en el que esta escrito.
16. Si una etiqueta HTML esta ya representada por una instancia de objeto DOM, no deberías necesitar duplicar la defunción de la instancia para representar su contenido.
17. Tu pagina principal HTML debería estar limpia, pero deberías poder enlazar lo que controla el comportamiento de la etiqueta sin afectar la sintaxis del HTML.
18. El orden de ejecución de tu código debe ser fácil de entender y leer desde el codigo y el proceso de renderizado de cada componente debería tener y ejecutar control en cuantas capas necesites.
19.Un patrón en capas(como el MVC o MVCC) debería estar presente para cada componente. No importa si defines cada capa o no.
20. El comportamiento de un componente no debe estar determinado por su proceso de renderizado
21. Es necesario que la pila de componentes se divida en el DOM hacia un árbol subyacente de elementos adjuntos.Entonces ahora existe y se llama Pila anidada de componentes de QCObject.
22. Deberías ser capaz de extender una instancia de componente. Pero deberás ser capaz de controlar su comportamiento dinámico sin afectar a la declaración inicial.
23. Deberías ser capaz de aplicar efectos visuales y animaciones simultaneas de una manera facil a una instancia de elemento DOM.
24. Deberías ser capaz de controlar los efectos visuales y animaciones de CSS como JavaScript sin afectar a su desempeño.
25.Deberías ser capaz de controlar el comportamiento de tu código Into-the-box y out-of-the-box y sobrevivir haciéndolo.
