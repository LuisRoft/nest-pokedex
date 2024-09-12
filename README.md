<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar repositorio
2. Instalar dependencias

```ssh
pnpm install
```

3. Tener Nest CLI instalado

```ssh
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```ssh
docker-compose up -d
```

5. Clonar el archivo `.env.template` y renombrar la copia a `.env`

6. Llenar las variables de entorno definidas en el `.env`

7. Levantar el proyecto en desarrollo y en modo watch

```ssh
pnpm start:dev
```

8. Reconstruir la base de datos con la semilla - Solicitud EP

```ssh
https://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- Nest

# Production build

1. Crear el archivo `.env.prod`
2. Ingresar las variables de entorno de prod
3. Buildear el proyecto (solo la primera vez)

```ssh
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

Para levantar el proyecto en otras ocasiones ya no buildearlo

```ssh
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```
