My NestJS project stureture just base on seperate everything to small part by using microservices and module concepts.

project-structure-example
├── api-gateway
│   └── src
│       └── auth
│       │   ├── auth.module.ts
│       │   ├── auth.services.ts
│       │   ├── auth.dto.ts
│       │   └── auth.guard.ts
│       ├── user
│       │   └── user.module.ts
│       ├── log
│       │   └── log.module.ts
│       ├── cart
│       │   └── cart.module.ts
│       ├── index.ts
│       └── app.module.ts
└── microservices
    ├── user-service
    ├── log-service
    ├── search-service
    └── cart-service (For example)
        ├── src
        │   ├── config
        │   │   ├── db.config.ts
        │   │   ├── cache.config.ts
        │   │   └── grpc.config.ts
        │   ├── cart
        │   │   ├── cart.controller.ts
        │   │   └── cart.entity.ts
        │   │   └── cart.services.ts
        │   │   └── cart.services.spec.ts
        │   │   └── cart.dto.ts
        │   │   └── cart.module.ts
        │   ├── index.ts
        │   └── app.module.ts
        ├── Dockerfile    
        ├── package.json
        └── tsconfig.json                   