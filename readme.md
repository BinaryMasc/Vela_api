# Proyecto API Vela
Este proyecto es una API REST creada con Node.js, Express, TypeScript e Inversify para gestionar noticias, usuarios y comentarios.# InstalaciónClona el repositorio en tu máquina local:```git clone https://github.com/tu-usuario/tu-repositorio.gitcd tu-repositorio```
1. Instala las dependencias del proyecto:
```npm install```
2. Instala las dependencias adicionales:
```npm install typescript ts-node nodemon ts-node-dev @types/node @types/express @types/cors @types/body-parser @types/dotenv reflect-metadata inversify inversify-express-utils inversify-binding-decorators @types/mongoose mongoose```
3. Crea un archivo .env en la raíz del proyecto con las variables de entorno necesarias:```Copy codePORT=3000MONGO_URI=mongodb://localhost:27017/your-database-name```Asegúrate de reemplazar your-database-name con el nombre de tu base de datos.
4. Compila y ejecuta el proyecto:npm run buildnpm run startLa API estará disponible en http://localhost:3000/api.

## Comandos disponibles
```npm run build```: compila el proyecto y genera los archivos JavaScript en la carpeta dist.
```npm run star```t: inicia la aplicación en modo de producción.
```npm run dev```: inicia la aplicación en modo de desarrollo con ts-node-dev para reiniciar automáticamente el servidor cuando se detecten cambios en los archivos.