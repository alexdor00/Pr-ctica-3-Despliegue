# Utilizar la imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos de dependencias de proyecto
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install

# Copiar todos los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]


# Usa una imagen base de nginx (un servidor web)
FROM nginx

# Copia el archivo index.html al directorio de contenido de nginx
COPY index.html /usr/share/nginx/html/

# El puerto 80 por defecto para nginx
EXPOSE 80