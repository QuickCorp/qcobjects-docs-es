#### AWS Amazon Machine Images (AMI)

Un Amazon Machine Image (AMI) otorga información requerida para lanzar una instancia.  Tienes que especificar un AMI cuando quieras lanzar una instancia. Puedes lanzar múltiples instancias para un solo AMI cuando necesites múltiples instancias con la misma configuración. Puedes usar diferentes AMIs para lanzar instancias cuando necesites instancias con diferentes configuraciones.

Un AMI incluye lo siguiente:

- Uno o mas EBS snapshots, o, para instance-store-backed AMIs, una plantilla para la raíz volumen de la instancia(por ejemplo, un sistema operativo, un servidor de aplicaciones y aplicaciones).
- Lanza permisos que controla que cuenta AWS puede usar el AMI para lanzar instancias.
- Un bloqueo de dispositivos mapping que especifica los volúmenes adjuntos a la instancia cuando es lanzada.

[Empieza construyendo QCObjects AMI aquí](https://aws.amazon.com/marketplace/pp/B07YZRH7VB)
