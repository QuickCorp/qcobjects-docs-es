# Component Class
A QCObjects class type for components.

#### Properties

**[Component].domain**
Returns a string with the domain of your application. It is automatically set by QCObjects at the load time.

**[Component].basePath**
Returns a string with the base path url of your application. It is automatically set by QCObjects at the load time.

NOTE: If you want to change the components base path, you have to use _CONFIG.set('componentsBasePath','new path relative to the domain')_ in your init code.

**[Component].templateURI**
Is a string representing the component template URI relative to the domain. When is set, the component will load a template and append the inner content into the body childs as a part of the DOM. To set this property, it is recommended to use the ComponentURI helper function.

**[Component].tplsource**
Is a string representing the source where the template will be loaded. It can be "default" or "none". A value of "default" will tell QCObjects to load the template from the templateURI content. A value of "none" will tell QCObjects not to load a template from anywhere.

**[Component].url**
Is a string representing the entire url of the component. It is automatically set by QCObjects when the component is instantiated.

**[Component].name**
Is a string representing the name of a component. The name of a component can be any alphanumeric value that identifies the component type. It will be internally used by ComponentURI to build a normalised component template URI.

**[Component].method**
Is a string representing a HTTP or HTTPS method. By default, every component is set to use the "GET" method. In the most of cases, you don't need to change this property.

**[Component].data**
Is an object representing the data of the component. When QCObjects loads a template, it will get every property of data object and bind it to a template label representing the same property inside the template content between double brakets (example: {{prop1}} in the template content will represent data.prop1 in the component instance).
NOTE: To refresh the data bindings it is needed to rebuild the component (see the use of [Component].rebuild() method for more details ).

**[Component].reload**
Is a boolean value that tells QCObjects when to force reload the content of a component from the template or not. If its value is true, the template content will be replacing the current DOM childs of the component body element. If its value is false, the template content will be added after the las component body child.

**[Component].cached**
Is a boolean value that tells QCObjects if the component needs to be cached or not. When a component is cached, the template content loaded from templateURI will be loaded once. You can set this property either as a static property of the Component Class to set the default value for every next component object instance, or setting the individual value of the property in every component definition. In a world where the performance matters, to give more flexibility to the cache behaviour is needed more than ever.

**[Component].routingWay**
Returns a string representing the routing way. Its value can be "hash", "pathname" or "search".
NOTE: To change the routingWay of every component it is recommended to use CONFIG.set('routingWay','value of a valid routing way') in your init code.

**[Component].validRoutingWays**
Returns a list representing the valid routing ways.  QCObjects uses this to internally validate the routingWay which was used to build the component routings.

**[Component].routingNodes**
Returns a NodeList object representing the list of nodes that were loaded by the component routing builder.

**[Component].routings**
Returns a list with the component routings built when the component was instantiated.

**[Component].routingPath**
Returns a string representing the current routing path

**[Component].routingSelected**
Returns an object representing the current routing of the component

**[Component].subcomponents**
Returns a list of components that are childs of the component instance.

**[Component].body**
Is a DOM element representing the body of the component.
NOTE: Every time a component body is set, it will trigger the routings builder for this component.

#### Methods
**[Component].set('prop',value)**
Sets a value for a component property.

**[Component].get('prop')**
Returns the value of a component property

**[Component].rebuild()**
Rebuilds the component. It will force a call for the componentLoader with this component when it's needed.

**[Component].Cast(ClassName or ComponentClassName)**
Returns the cast of a component definition into another one. This is useful to dynamically merge components definitions.

**[Component].route()**
Forces the component routings builder to reload the routings of the component. This will result in a rebuild call when it's needed.

**[Component].fullscreen()**
Puts the component in fullscreen mode.

**[Component].closefullscreen()**
Closes the fullscreen mode.

**[Component].css(css object)**
Sets the css properties for the component.

**[Component].append(component or QCObjects object)**
Appends a component as a child of the current component body

**[Component].attachIn(selector)**
Attaches a current component body to any element in the given selector.
