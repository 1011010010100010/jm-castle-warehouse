# How to make it run

Currently the description is Windows only.
Of course the installation process could be improved and may be it will ;-).

## Create directory and copy files

The files in the "win" folder (within pm2 and servivce) assume, that you have created a directory "c:/castle-live".
If you use a different directory, you have to exchange "c:/castle-live" with your directory.

The files also assume, that

- jm-castle-warehouse will be installed within a directory called "castle-warehouse". If you like to use a different name, you have to exchange "castle-warehouse" with your directory.
- the configuration file is placed in a directory called "castle-warehouse-config"

Copy all files from the "win" folder into "c:/castle-live".

## Execute the .bat files

### install-castle-warehouse.bat

This file is doing two things:
It deletes the directory "castle-warehouse" including all it´s content.
Then it uses git to clone the current version of jm-castle-warehouse into the directory "castle-warehouse".

If you are running castle-warehouse as a service, then it is necessary to stop the service
before executing this file.

If you are running castle-warehouse as a service, then it is necessary to execute install-service.bat again after executing
build-castle-warehouse.bat

### install-modules-castle-warehouse.bat

This file uses npm to install the necessary npm packages.

### build-castle-warehouse.bat

This file uses npm to build the runnable jm-castle-warehouse.

## Start jm-castle-warehouse as service

### install-service.bat

This file uses install-service.js, which needs the npm package "node-windows".
Install node-windows globally, using

npm install -g node-windows

and after installing use

npm link node-windows.

Edit the install-service.bat so that the NODE_PATH fits your path.
The path depends on your user.

Edit the install-service.bat so that the CONFIG points to your config file.

Then execute the install-service.bat file and accept the dialogs.

After executing the service should run. Otherwise something went wrong.

The installation includes creation of a folder "daemon" within the folder where the start-script is, e.g.
when the script is "C:\castle-live\castle-warehouse\build\start.mjs" then "daemon" is created in
"C:\castle-live\castle-warehouse\build".

The daemoin folder includes the files which are necessary for the service excution and two log files.

### uninstall-service.bat

This file uses uninstall-service.js, which needs the npm package "node-windows" (see above install-service).

Edit the uninstall-service.bat so that the NODE_PATH fits your path.
The path depends on your user.

## Start jm-castle-warehouse manually

### cw-config.json

The folder "castle-warehouse-config" includes an example config file.
You have to edit this file and fill in the values for your installation, e.g. host for your mariaDB.

### creating-certificates.md

The folder "castle-warehouse-cert" includes an example file, which you will need for creating certificates.
Follow the instructions of "creating-certificates.md" in this folder to create your own certificates.

### start-castle-warehouse.bat

This file uses pm2 to start jm-castle-warehouse.
The file "ecosystem.config.js" specifies the necessary configuration file for jm-castle-warehouse.

### stop-castle-warehouse.bat

This file uses pm2 to stop jm-castle-warehouse.

### kill-castle-warehouse.bat

This file kills pm2. This is necessary, if you have changed the ecosystem.config.js, to take effect.

### save-pm2-config.bat

After the first start of pm2 (including castle-warehouse) execute this file.
It ensures that for the next start and resurrect the current status will be used.

### Autostart pm2 on reboot

see: https://www.npmjs.com/package/pm2-windows-startup
It is necessary to have a auto-logon for the windows user, for which pm2 was installed, to take effect.
