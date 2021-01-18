# Installing

## Using QCObjects with Atom:

```shell
> apm install qcobjects-syntax
```
https://atom.io/packages/qcobjects-syntax

## Using QCObjects in Visual Studio Code:

[![Badge for installs for Visual Studio Code extension Quickcorp.QCObjects-vscode](https://vsmarketplacebadge.apphb.com/version/Quickcorp.QCObjects-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=Quickcorp.QCObjects-vscode)

https://marketplace.visualstudio.com/items?itemName=Quickcorp.QCObjects-vscode

## Installing with NPM:

```shell
> npm install qcobjects-cli -g && npm install qcobjects --save
```
![screenshot2](https://qcobjects.dev/doc/img/QCObjects-Quick-Start.gif)

## Installing the docker playground:

```shell
docker pull -a quickcorp/qcobjects-playground && docker run -it --name qcobjects-playground --rm -it quickcorp/qcobjects-playground
```

![screenshot3](https://qcobjects.dev/doc/img/QCObjects-Docker-Playground.gif)

## One-Step Installation Script for Ubuntu 18.x

WARNING: Do this only in a fresh|blank|brandnew installation of Ubuntu 18.x, don't do it into an existing production environment. You will be asked for sudo grant permission.


```shell
curl -L https://qcobjects.dev/install_qcobjects_ubuntu18x.sh |sh
```

WARNING: I'm not responsible for damaging your infrastructure by using an automated installation script into an unsafe network. Make sure all your repos and scripts are under HTTPS with a valid certificate. For better safe results I recommended you to download the script, edit it for your special needs and then execute it in your machine as local.

## One-Step Installation Script for macOS
Tested on macOS Catalina 10.15.3

```shell
curl -L https://qcobjects.dev/install_qcobjects_macOS.sh | zsh
```

## Install and test QCObjects on Microsoft Windows OS

1.- Install the latest version of NodeJS for Windows from [here](https://nodejs.org/)
2.- From cmd install qcobjects-cli using npm

```powershell
npm i qcobjects-cli -g
```
3.- Create a directory for your project

```powershell
md mynewproject && cd mynewproject
```
4.- Create a new QCObjects Progressive Web Application

```powershell
qcobjects create mynewproject --pwa
```

![screenshot](https://qcobjects.dev/doc/img/QCObjects-running-on-Windows64bit.gif)


## QCObjects Multi-Cloud Installation

QCObjects is natively supported by the most famous cloud providers. In most of them, you can install it and set everything up and running in just one step.

### DigitalOcean One-Click Droplet

If you want to forget apt-get and the config guide. Go straight to deploying your project using a preconfigured 1-Click App including QCObjects CLI, QCObjects-SDK and QCObjects HTTP2 Built-In Server, then spin it up on a Droplet VM or a Kubernetes cluster in 60 seconds or less.

[Create Your Own QCObjects DigitalOcean Droplet here](https://marketplace.digitalocean.com/apps/qcobjects)

### AWS Amazon Machine Images (AMI)

An Amazon Machine Image (AMI) provides the information required to launch an instance. You must specify an AMI when you launch an instance. You can launch multiple instances from a single AMI when you need multiple instances with the same configuration. You can use different AMIs to launch instances when you need instances with different configurations.

An AMI includes the following:

- One or more EBS snapshots, or, for instance-store-backed AMIs, a template for the root volume of the instance (for example, an operating system, an application server, and applications).
- Launch permissions that control which AWS accounts can use the AMI to launch instances.
- A block device mapping that specifies the volumes to attach to the instance when it's launched.

[Start building your QCObjects AMI here](https://aws.amazon.com/marketplace/pp/B07YZRH7VB)

### Amazon Web Services AWS PIB (Private Amazon Machine Image)


A Private Image lets you build a new AMI by installing AWS Marketplace software on an image you choose from the AMIs available to your AWS account, this allows you to better meet internal specifications for security, management and compliance. As with standard AWS Marketplace AMIs, each Private Image will comprise a subscription for the installed product and have software usage billed via AWS Marketplace.

[Start building your QCObjects Amazon Private Image here](https://aws.amazon.com/marketplace/pp/B07YZRH7VB)


## Using the development version code in the straight way into HTML5:

```html
<script type="text/javascript" src="https://qcobjects.dev/QCObjects.js"></script>
```

## Using the CDN minified version code from jsDelivr CDN

```html
<script src="https://cdn.jsdelivr.net/npm/qcobjects/QCObjects.min.js"></script>
```

## Using the latest non-minified version from jsDelivr CDN

```html
<script src="https://cdn.jsdelivr.net/npm/qcobjects/QCObjects.js"></script>
```

## Using UNPKG CDN

```html
<script src="https://unpkg.com/qcobjects@latest/QCObjects.js"></script>
```

## Using CDNJS

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qcobjects/[VERSION]/QCObjects.js"></script>
```

Where [VERSION] is the corresponding latest version using numeric notation, example: to use version 2.1.420:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qcobjects/2.1.420/QCObjects.js"></script>
```

You don't need to minify QCObjects, but if you still want to use the minified code, you can do this:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qcobjects/2.1.420/QCObjects.min.js"></script>
```

Again, Change 2.1.420 to the number of the version that you want to use.
