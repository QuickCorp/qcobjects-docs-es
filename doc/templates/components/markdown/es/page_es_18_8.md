## Instalación QCObjects Multi-Cloud

QCObjects es nativamente soportado por los mas famosos proveedores de nubes. Puedes instalar la mayoría de ellos, preparar y correr todo en un solo paso.

### DigitalOcean One-Click Droplet

Si quieres olvidar apt-get y de configurar la guía, ve directo a desplegar tu proyecto usando una preconfigurada app 1-click incluyendo QCObjects CLI, QCObjects-SDK y QCObjects HTTP2 servidor Built-in. Luego giralo a Droplet VM o a Kubernetes cluster en 60 segundos o menos.

[Crea tu propio Droplet de QCObjects DigitalOcean Aquí](https://marketplace.digitalocean.com/apps/qcobjects)

### AWS Amazon Machine Images (AMI)

Un Amazon Machine Image (AMI) otorga información requerida para lanzar una instancia.  Tienes que especificar un AMI cuando quieras lanzar una instancia. Puedes lanzar múltiples instancias para un solo AMI cuando necesites múltiples instancias con la misma configuración. Puedes usar diferentes AMIs para lanzar instancias cuando necesites instancias con diferentes configuraciones.

Un AMI incluye lo siguiente:

- Uno o mas EBS snapshots, o, para instance-store-backed AMIs, una plantilla para la raíz volumen de la instancia(por ejemplo, un sistema operativo, un servidor de aplicaciones y aplicaciones).
- Lanza permisos que controla que cuenta AWS puede usar el AMI para lanzar instancias.
- Un bloqueo de dispositivos mapping que especifica los volúmenes adjuntos a la instancia cuando es lanzada.

[Empieza construyendo QCObjects AMI aquí](https://aws.amazon.com/marketplace/pp/B07YZRH7VB)

### Amazon Web Services AWS PIB (Private Amazon Machine Image)

Imagen privada que te permite construir un nuevo AMI instalando un software AWS Market place en una imagen que tu elijas del AMI disponibles en tu cuenta AWS, esto permite que conocer a mejores especificaciones internas para seguridad, gestiones y cumplimientos.  Como con los Marketplace AWS AMIs estándar, cada imagen privada se comprometera a subscripción por el producto instalado y tiene uso de software facturado vía AWS Marketplace.

[Empieza creando tu QCObjects Amazon Private Image aquí](https://aws.amazon.com/marketplace/pp/B07YZRH7VB)
