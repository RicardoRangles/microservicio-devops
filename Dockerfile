# Usa la imagen base de Node.js
FROM node:18-alpine

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --only=production

# Copia el resto de la aplicación
COPY . .

# Configura la variable de entorno para el hostname
ENV HOSTNAME=loadbalancer

# Expone el puerto que el contenedor usará
EXPOSE 3000

# Comando para iniciar la aplicación (aquí se ejecuta el servidor)
CMD ["node", "server.js"]
