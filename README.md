#test Pi Interactiva Correr el proyecto

//IMPORTANTE: npm i -g nodemon se tiene que instalar en la carpeta back no en front como escribi en el punto 2 de los pasos en windows

En Windows:

1. Entrar a esta url: https://github.com/Royman56/test-pi y clonar el proyecto o descargarlo como ZIP
2. Si lo descargas lo descomprimes y vas a la carpeta back y abres la consola(en el video utilice git bash).
para introducir el comando npm i y luego lo mismo con la carpeta front solo que escribes otro comando que seria
npm i -g nodemon y si lo clonas vas a donde quedo guardado el proyecto
abres la consola e introduces el mismo comando con cada una de las carpetas.
3.Abrir visual studio code y entrar en el archivo .env y cambiar MONGO = colocas tu url de mongo para
conectarse a la base de datos.
4. Despues de npm i cuando termine de descargar la consola colocas npm start en la carpeta front y en otra consola
en la carpeta back escribes nodemon index esto iniciara el proyecto completo.
5. Con postman en la url http://localhost:8800/priority enviaras un body para crear 3 prioridades las cuales son: Alta,
Media, Baja, adjunto como debes enviar el body en postman: {
"name": "Alta"
}, 
{
"name": "Media"
},
{
"name": "Baja"
}
6. Cuando el proyecto se inicia se abre una pestaña en el navegador con dicho proyecto y ya puedes registrarte para luego 
iniciar sesión y probar todas las funcionalidades.

En Linux:

1. Lo mismo que en windows
2. Lo mismo que en windows si sale error colocas npm i --force
3. Lo mismo que en windows
4. instalar nodemon sudo npm i -g nodemon
5. Despues de npm i cuando termine de descargar la consola colocas npm start en la carpeta front y en otra consola
en la carpeta back escribes nodemon index esto iniciara el proyecto completo.
6. Con postman en la url http://localhost:8800/priority enviaras un body para crear 3 prioridades las cuales son: Alta,
Media, Baja, adjunto como debes enviar el body en postman: {
"name": "Alta"
}, 
{
"name": "Media"
},
{
"name": "Baja"
}
7. Cuando el proyecto se inicia se abre una pestaña en el navegador con dicho proyecto y ya puedes registrarte para luego 
iniciar sesión y probar todas las funcionalidades.
