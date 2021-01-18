### SDK i18n messages

El motor QCObjects i18n le permite definir mensajes personalizados. Obtenga más información en este artículo en el DevBlog llamado [i18n Internationalisation for your Progressive Web Apps](https://devblog.qcobjects.org/i18n-internationalisation-for-your-progressive-web-apps-ck90h4qz301ca7vs1ue7joopu)

#### org.qcobjects.i18n_messages.i18n_messages

Utlizado para llamar al motor i18n.

##### Uso:
```javascript
  Class('i18n_messages_<custom lang>', i18n_messages,{
		...
	})
```

##### Ejemplo
```javascript
'use strict';
// file: js/packages/org.qcobjects.i18n_messages.es.js
Package('org.qcobjects.i18n_messages.es', [
  Class('i18n_messages_es', i18n_messages, {
    messages: [
       // ... your custom language dictionary is here
      {
         "en":"This is a paragraph",
         "es":"Esto es un párrafo"
      },
      {
         "en":"Welcome to my new app",
         "es":"Bienvenido a mi nueva app"
      }
    ]
  }),
  {
		// the next line generates an instance of the i18n engine and attaches it automatically in the package
    _i18n_messages_es: New(i18n_messages_es)
  }
]);
```
