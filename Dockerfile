# Imagen base oficial de Node.js
FROM node:18

# Crear y usar el directorio de la app
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa Express
EXPOSE 3000

# Comando para ejecutar la app
CMD [ "node", "index.js" ]
