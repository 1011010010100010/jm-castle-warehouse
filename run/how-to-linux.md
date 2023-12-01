# How to make it run

This description is for Linux only.
For Windows version see how-to-windows.md

## Create directory and copy files

The files in the "install_scripts" folder assume, that you have created a directory "/root/castle-live".
If you use a different directory, you have to exchange "/root/castle-live" with your directory.

The files also assume, that

- jm-castle-warehouse will be installed within a directory called "castle-warehouse". If you like to use a different name, you have to exchange "castle-warehouse" with your directory.
- the configuration file is placed in a directory called "castle-warehouse-config"

Copy the pm2 folder, castle-warehouse-config folder and castle-warehouse-cert folder into "/root/castle-live".

## Execute the .sh files

### install-castle-warehouse.sh

This file is doing two things:
It deletes the directory "castle-warehouse" including all it´s content.
Then it uses git to clone the current version of jm-castle-warehouse into the directory "castle-warehouse".

If you are running castle-warehouse as a service, then it is necessary to stop the service
before executing this file.

If you are running castle-warehouse as a service, then it is necessary to execute install-service.sh again after executing
build-castle-warehouse.sh

### install-modules-castle-warehouse.sh

This file uses npm to install the necessary npm packages.

### build-castle-warehouse.sh

This file uses npm to build the runnable jm-castle-warehouse.

## Start jm-castle-warehouse as service 

### to do that we use pm2 on startup

check out the documentation from github https://github.com/Unitech/pm2#startup-script-generation

# Generate Startup Script
$ pm2 startup

# Freeze your process list across server restart
$ pm2 save

# Remove Startup Script
$ pm2 unstartup

## Start jm-castle-warehouse manually

### cw-config.json

The folder "castle-warehouse-config" includes an example config file.
You have to edit this file and fill in the values for your installation, e.g. host for your mariaDB.

### creating-certificates.md

The folder "castle-warehouse-cert" includes an example file, which you will need for creating certificates.
Follow the instructions of "creating-certificates.md" in this folder to create your own certificates.

### start-castle-warehouse.sh

This file uses pm2 to start jm-castle-warehouse.
The file "ecosystem.config.js" specifies the necessary configuration file for jm-castle-warehouse.

### stop-castle-warehouse.sh

This file uses pm2 to stop jm-castle-warehouse.

### kill-castle-warehouse.sh

This file kills pm2. This is necessary, if you have changed the ecosystem.config.js, to take effect.

### save-pm2-config.sh

After the first start of pm2 (including castle-warehouse) execute this file.
It ensures that for the next start and resurrect the current status will be used.

### Autostart pm2 on reboot

will follow soon
