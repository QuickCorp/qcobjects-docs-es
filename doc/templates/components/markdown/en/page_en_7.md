# Progressive Web Apps (PWA) Adopted Features

## Prevent Render-blocking resources

To prevent Render-blocking resources, QCObjects has implemented the [Package](#Package) factory function.

## On-Demand Resources Load

With a dynamic components driven architecture, QCObjects is rendering every visual resource that is inside of a component only when the component is building itself, and every component is connected to a tree called global.componentsStack that is actually pointing to every component instance and its subcomponents. Every time a component is rebuilt, visual resources are dynamically reloaded on-demand in the most efficient way, so you can forget all the nasty code that you were needing to controll the resource loading process with other frameworks.

## Lazy-loading of images in components (use lazy-src instead of src attribute in img tag)

Since the version 2.1.251, QCObjects provide an easy way to lazy load the images, using the latest standard for browsers.

```html
<img src="img/preloader.svg" lazy-src="img/myrealimage.png"/>
```

In the above code, a preloader (light-weight) image is used to be loaded in the first instance, and a **lazy-src** attribute is used to set the real image to show after lazy loading process. QCObjects will load all the **<img>** declared tags inside a component in lazy mode if they have a lazy-src attribute, after the component is rebuilt or loaded. Also, QCObjects will use the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) (when available) to determine whether the lazy-src or src image is visually useful to be showed.

The effect of lazy loading is only high visible on the first time the PWA is loaded. The next time, the speed of loading will be significantly increased making more difficult to the human eye to see the result. However this feature makes a lot of difference in terms of user experience when the internet connection has low speed issues or the images are extremely large. This feature is a part of the recommended features for PWAs writen by [Mozzila Developers Network](https://developer.mozilla.org/) in an article about Progressive loading. You can read that article [here](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading)

If you don't want to use lazy loading for images, you can always keep the normal way of loading by not adding the **lazy-src** attribute to the **<img>** tag and using the traditional **src**.

