# Creating certificates

The source for this description was: "https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development/"

I used the openSSL of my GIT installation. Replace <openssl> with your concrete path to openssl.exe.
For example: openssl = 'C:/Program Files/Git/usr/bin/openssl.exe'.

Replace also the file names in the commands (e.g. "myCA", "your-host").

Open a shell (cmd) in a newly created directory and execute the following commands.

## self signed root certificate

### Step 1

command: openssl genrsa -des3 -out myCA.key 2048
output: file "myCA.key" (the key for your new root certificate)

### Step2

It is important to remember the used password!
command: openssl req -x509 -new -nodes -key myCA.key -sha256 -days 360 -out myCA.pem
output: file "myCA.pem" (your root certificate)

## Certificate for a host

### Step 1

command: openssl genrsa -out your-host.key 2048
output: file "your-host.key" (the key for your new host certificate)

### Step 2

command: openssl req -new -key your-host.key -out your-host.csr
output: file "your-host.csr" (which means a request for a acertificate)

### Step 3

Create a file like "your-host-example.ext" (placed in folder "cast-warehouse-cert").
You just have to exchange "your-host" with the host name you are running your warehouse on.
Copy your .ext file into the directory, which contains the files created before.

### Step 4

command: openssl x509 -req -in your-host.csr -CA myCA.pem -CAkey myCA.key -CAcreateserial -out your-host.crt -days 360 -sha256 -extfile your-host.ext
output: file "your-host.crt" (the certificate for your host)

## Untrusted certificate?

Because you have a self signed certificate, clients won´t trust it automatically.
If you are using Windows, you can make it trust your host certicate by adding your root certificate.
The easiest is convert your created self signed root certificate.

### Step 1

command: openssl pkcs12 -in myCA.pem -export -nokeys -out myCA.pfx
output: file "myCA.pfx" (your root certificate in a different format)

### Step 2

On the client machine right click your mouse on the .pfx file and choose "install".
You will also need to know the used password for your self signed certificate.
