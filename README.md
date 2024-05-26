# My Hexagonal App

This is a TypeScript project that follows the hexagonal architecture pattern. It separates the application into different layers, allowing for better modularity and testability.

## Project Structure

```
my-hexagonal-app
├── src
│   ├── application
│   │   ├── services
│   │   │   └── index.ts
│   │   └── dtos
│   │       └── index.ts
│   ├── domain
│   │   ├── entities
│   │   │   └── index.ts
│   │   └── interfaces
│   │       └── index.ts
│   ├── infrastructure
│   │   ├── db
│   │   │   └── index.ts
│   │   └── http
│   │       ├── app.ts
│   │       ├── controllers
│   │       │   └── index.ts
│   │       └── routes
│   │           └── index.ts
│   └── config
│       └── index.ts
├── .swcrc
├── package.json
├── tsconfig.json
└── README.md
```

## Files

### `src/application/services/index.ts`

This file exports the services used in the application layer of the hexagonal architecture.

### `src/application/dtos/index.ts`

This file exports the data transfer objects (DTOs) used in the application layer of the hexagonal architecture.

### `src/domain/entities/index.ts`

This file exports the entities used in the domain layer of the hexagonal architecture.

### `src/domain/interfaces/index.ts`

This file exports the interfaces used in the domain layer of the hexagonal architecture.

### `src/infrastructure/db/index.ts`

This file exports the database-related functionality used in the infrastructure layer of the hexagonal architecture.

### `src/infrastructure/http/app.ts`

This file is the entry point of the application. It creates an instance of the express app and sets up middleware and routes.

### `src/infrastructure/http/controllers/index.ts`

This file exports the controllers used in the infrastructure layer of the hexagonal architecture.

### `src/infrastructure/http/routes/index.ts`

This file exports the routes used in the infrastructure layer of the hexagonal architecture.

### `src/config/index.ts`

This file exports the configuration settings used in the project.

### `.swcrc`

This file is the configuration file for SWC (a JavaScript/TypeScript compiler). It specifies the compiler options and transformations to be applied.

### `tsconfig.json`

This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

### `package.json`

This file is the configuration file for npm. It lists the dependencies and scripts for the project.

### `README.md`

This file contains the documentation for the project.
