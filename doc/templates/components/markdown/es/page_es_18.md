# Instalar

## Usando QCObjects con Atom:

```shell
> apm install qcobjects-syntax
```
https://atom.io/packages/qcobjects-syntax

## Usando QCObjects con Visual Studio Code:

[![Badge for installs for Visual Studio Code extension Quickcorp.QCObjects-vscode](https://vsmarketplacebadge.apphb.com/version/Quickcorp.QCObjects-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=Quickcorp.QCObjects-vscode)

https://marketplace.visualstudio.com/items?itemName=Quickcorp.QCObjects-vscode

## Instalando con NPM:

```shell
> npm install qcobjects-cli -g && npm install qcobjects --save
```
![screenshot2](https://qcobjects.dev/doc/img/QCObjects-Quick-Start.gif)

## Instalando el docker playground:

```shell
docker pull -a quickcorp/qcobjects-playground && docker run -it --name qcobjects-playground --rm -it quickcorp/qcobjects-playground
```

![screenshot3](https://qcobjects.dev/doc/img/QCObjects-Docker-Playground.gif)

## Script de instalación One-Step para Ubuntu 18.x

ATENCIÓN: Haz esto solo en una instalación de Ubuntu 18.x fresca/vacia/actual. No lo haga en un ambiente existente de producción.
 Se te pedira permiso sudo grant.

```shell
curl -L https://qcobjects.dev/install_qcobjects_ubuntu18x.sh |sh
```
ATENCIÓN: No somos responsables de el daño en la infraestructura por usar una instalación automatizada de script en una network insegura. Asegúrate de que tus repos y scripts están bajo HTTPS con su certificado valido. Para mejores resultados te recomendamos descargar el script, editarlo para tus necesidades especiales y después ejecútalo en tu maquina local.

## Script de instalación One-Step for macOS

Probado en macOS Catalina 10.15.3

```shell
curl -L https://qcobjects.dev/install_qcobjects_macOS.sh | zsh
```

## Instalar y probar QCObjects en Sistema Operativo Microsoft Windows

1.- Instala la ultima versión de NodeJS para Windows[Aquí](https://nodejs.org/)
2.- Desde el cmd instala qcobjects-cli usando npm


```powershell
npm i qcobjects-cli -g
```
3.- Crea un directorio de para tu proyecto

```powershell
md mynewproject && cd mynewproject
```
4.- Crea una nueva aplicación web progresiva de QCObjects

```powershell
qcobjects create mynewproject --pwa
```

![screenshot](https://qcobjects.dev/doc/img/QCObjects-running-on-Windows64bit.gif)


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

## Usando el código de la versión de desarrollo directo en HTML5

```html
<script type="text/javascript" src="https://qcobjects.dev/QCObjects.js"></script>
```

## Usando la versión minificada de código CDN desde jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/qcobjects/QCObjects.min.js"></script>
```

## Usando la última versión no-minificada desde CDN jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/qcobjects/QCObjects.js"></script>
```

## Usando CDN UNPKG

```html
<script src="https://unpkg.com/qcobjects@latest/QCObjects.js"></script>
```

## Usando CDNJS

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qcobjects/[VERSION]/QCObjects.js"></script>
```

Donde [VERSIÓN] corresponde a la ultima versión usando notaciones numericas, ejemplo: to use version 2.1.420:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qcobjects/2.1.420/QCObjects.js"></script>
```

No necesitas minificar QCObjects, pero si aún quieres usar el codigo minificado puedes hacer esto:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qcobjects/2.1.420/QCObjects.min.js"></script>
```

Otra vez cambia 2.1.420 al numero de la versión que quieras usar.
