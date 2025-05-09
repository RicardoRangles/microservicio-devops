#  Reto Técnico Microservicio DevOps

## Descripción del Proyecto

Este proyecto consiste en un microservicio REST desarrollado con Node.js que expone un único endpoint `/DevOps`. Este endpoint acepta solicitudes HTTP POST con un JSON específico, protege el acceso mediante una API Key y genera un JWT único por transacción.

El proyecto ha sido completamente contenerizado usando tecnología Docker y desplegado con Docker Compose usando un balanceador de carga Nginx que distribuye peticiones entre múltiples instancias. También incluye un pipeline CI/CD con GitHub Actions, pruebas automatizadas con Jest, análisis estático con ESLint, y soporte para múltiples entornos y escalabilidad dinámica.

## Requisitos Cumplidos del Reto

| Requisitos                                       

| Microservicio REST funcional                    | OK        
| Endpoint `/DevOps` con JSON esperado            | OK        
| Seguridad con API Key y JWT                     | OK        
| Pruebas automatizadas                           | OK        
| Análisis estático de código (ESLint)            | OK        
| CI/CD funcional con múltiples entornos          | OK        
| Despliegue contenerizado y balanceador de carga | OK       
| Escalabilidad dinámica con Docker Compose       | OK        
| Documentación técnica                           | OK        
| Repositorio público en GitHub                   | OK        

## Tecnologías Usadas

- Node.js 18
- Express
- Docker & Docker Compose
- Nginx (como balanceador de carga)
- Jest (pruebas automatizadas)
- ESLint (análisis estático)
- GitHub Actions (CI/CD)
- JWT (seguridad por token)

## Cómo Ejecutar el Proyecto

### Requisitos previos:
- Docker y Docker Compose instalados

### 1. Clonar el repositorio

git clone https://github.com/ricardorangles/microservicio-devops.git
cd microservicio-devops

### 2. Construir y levantar el entorno

docker-compose up --build

Esto iniciará:
- 2 instancias del microservicio (dev y prod)
- 1 balanceador de carga Nginx en el puerto `8080`

### 3. Hacer una prueba al endpoint

curl -X POST http://localhost:8080/DevOps \
  -H "Content-Type: application/json" \
  -H "X-Parse-REST-API-Key: 2f5ae96c-b558-4c7b-a590-a501ae1c3f6c" \
  -d '{"message": "This is a test", "to": "Juan Perez", "from": "Rita Asturia", "timeToLifeSec": 45}'

## Seguridad

- API Key requerida: `2f5ae96c-b558-4c7b-a590-a501ae1c3f6c`
- Cada transacción válida genera un JWT único en el header: `X-JWT-KWY`

## Pruebas Automatizadas

Se prueban:
- Solicitudes válidas
- Métodos HTTP no permitidos
- Rutas no válidas
- Falta de API Key

npm install
npm test

## Análisis Estático

npx eslint 

## CI/CD con GitHub Actions

Automatiza:
- Instalación de dependencias
- Linter
- Pruebas unitarias
- Publicación de Docker
- Despliegue desde rama `main`

## Balanceo de Carga y Escalabilidad

docker-compose up --scale microservice-dev=2 --scale microservice-prod=2

Nginx distribuye el tráfico entre instancias activas.

## Notas Finales

Todo el proyecto ha sido documentado, versionado y automatizado conforme a los requisitos del reto técnico. Puedes encontrar el código fuente completo en:

https://github.com/ricardorangles/microservicio-devops
