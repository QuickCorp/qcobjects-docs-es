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

