@echo off
setlocal enableextensions
rem "https://stackoverflow.com/questions/10175812/how-to-generate-a-self-signed-ssl-certificate-using-openssl"
cd "C:\Users\Luis\Documents\projects\lcpgamingandtech\api\ssl"
rem openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365 -nodes -subj '/CN=localhost'
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365 -nodes -subj "/C=PT/ST=PT/L=Braga/O=LCP, Inc./OU=LCP/CN=localhost"
pause
exit /b 0
endlocal