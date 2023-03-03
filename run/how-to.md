# How to make it run

Currently the description is Windows only.
Of course the installation process could be improved and may be it will ;-).

## Create directory and copy files

The files in the "win" folder assume, that you have created a directory "c:/castle-live".
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

### install-modules-castle-warehouse.bat

This file uses npm to install the necessary npm packages.

### build-castle-warehouse.bat

This file uses npm to build the runnable jm-castle-warehouse.

## Start jm-castle-warehouse

### cw-config.json

The folder "castle-warehouse-config" includes an example config file.
You have to edit this file and fill in the values for your installation, e.g. host for your mariaDB.

### start-castle-warehouse.bat

This file uses pm2 to start jm-castle-warehouse.
The file "ecosystem.config.js" specifies the necessary configuration file for jm-castle-warehouse.

### stop-castle-warehouse.bat

This file uses pm2 to stop jm-castle-warehouse.

### kill-castle-warehouse.bat

This file kills pm2. This is necessary, if you have changed the ecosystem.config.js, to take effect.

### Autostart pm2 on reboot

see: https://www.npmjs.com/package/pm2-windows-startup
