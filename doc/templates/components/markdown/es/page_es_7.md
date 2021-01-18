# Características Adoptadas de Apps Web Progresivas (PWA)

## Prevenir recursos Render-blocking

Para prevenir los recursos Render-blocking , QCObjects ha implementado la función de fabrica [paquete](#Package)

## Carga de recursos On-Demand

Con la arquitectura orientada a los componentes dinámicos, QCObjects renderiza cada recurso visual que esta dentro de un componente, solo cuando el componente se esta construyendo y cada componente esta conectado a un árbol llamado global.componentsStack ese es el que realmente esta apuntando a cada instancia de componente y sus a sus sub componentes. Cada vez que un componente es re-hecho, los recursos visuales están dinámicamente recargados bajo demanda de la manera mas eficiente, así que puedes olvidar esos horribles códigos donde necesitabas controlar el proceso de recarga de los recursos con otros frameworks.

## Lazy-loading de imágenes y componentes (usar atributo lazy-src en vez de src en tag img )

Desde la versión 2.1.251, QCObjects te otorga una forma fácil para el Lazy load de imágenes, usando el ultima estándar para los buscadores.

```html
<img src="img/preloader.svg" lazy-src="img/myrealimage.png"/>
```
En lo anterior, una imagen (ligera) precargada, es usada para ser cargada en la primera instancia y un atributo **lazy-src** es usado para cargar la imagen real después del proceso Lazy load. QCObjects cargara todos las **<img>** etiquetas declaradas dentro de un componente en el lazy mode si tiene un atributo lazy-src, después que un componente es rearmado o cargado. También, QCObjects usara [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) (Cuando este disponible) para determinar ya sea si el lazy-src o la imagen src son visualmente útiles para ser mostradas.

El efecto del Lazy loading es altamente visible solo si la primera vez el PWA es cargado. La próxima vez, la velocidad de carga aumentara significativamente haciendo difícil para el ojo humano ver el resultado. Sin embargo esta característica hará mucho la diferencia en términos de experiencia de usuario, si existen problemas de conexión o las imágenes son muy grandes esta característica es parte de las recomendadas por os escritores de PWA por [Mozzila Developers Network](https://developer.mozilla.org/) un articulo sobre Loadig progresivo. Puedes leer el articulo [here](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading)

Si no quieres usar lazy loading para las imágenes, siempre puedes mantener la forma usual de carga no añadiendo el atributo **lazy-src**  a la etiqueta **<img>** y usando el tradicional **src**.

