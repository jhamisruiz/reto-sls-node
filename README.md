# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies

- Run `npm run dev` to run local server
---
People
- `POST   | http://localhost:3000/dev/people`
- `GET    | http://localhost:3000/dev/people`
- `GET    | http://localhost:3000/dev/people/{id}`
- `DELETE | http://localhost:3000/dev/people/{id}`
- `PUT    | http://localhost:3000/dev/people/{id}`
Vehicles
- `GET    | http://localhost:3000/dev/vehicles`
- `GET    | http://localhost:3000/dev/vehicles/{id}`
--

Deploy this stack to AWS
### Develop
- Run `npm run deploy:dev `

### Production
- Run `npm run deploy:production`

---
### FUNCIONES LAMBDA:

- #### People (Using dynamodb)

	- `GET /planet` Get all list

  ```
  https://psaa1b6392.execute-api.us-west-1.amazonaws.com/production/people
  ```

	- `GET /people/{id}` Get people by _id_

  ```
  https://psaa1b6392.execute-api.us-west-1.amazonaws.com/production/people/{id}
  ```

	- `POST /planet` Add new people

  ```
  https://....amazonaws.com/{stage}/people
  ```

	- `PUT /planet/{id}` Update people by _id_

  ```
  https://....amazonaws.com/{stage}/people/{id}
  ```
  
	- `DELETE /planet/{id}` Delete people by _id_

  ```
  https://....amazonaws.com/{stage}/people/{id}
  ```

- #### Vehicles (integration with SWAPI)

	- `GET /vehicles` Get all list

  ```
  https://psaa1b6392.execute-api.us-west-1.amazonaws.com/production/vehicles
  ```

	- `GET /vehicles/{id}` Get vehicles by _id_

  ```
  https://psaa1b6392.execute-api.us-west-1.amazonaws.com/production/vehicles/{id}
  ```

- #### Vehicles (integration with SWAPI - map properties to spanish)

	- `GET /vehicles?ln=es` Get all list

  ```
  https://psaa1b6392.execute-api.us-west-1.amazonaws.com/production/vehicles?ln=es
  ```

	- `GET /vehicles/4?ln=es` Get vehicles by _id_

  ```
  https://psaa1b6392.execute-api.us-west-1.amazonaws.com/production/vehicles/4?ln=es
  ```
-----------

---
# Documentation in swagger see: https://app.swaggerhub.com/apis-docs/JHAMSELRAEC/reto-sls-node/1.0.0#/peoples/listPeoples
---

<br>
## Test your service

This template contains lambda functions enabled to perform HTTP request from API Gateway REST API provisioned with `POST, GET, PUT, DELETE` method. The request body must be provided as `application/json`. API Gateway checks the body structure with JSON schema definition, it must contain correct properties.

- Run `npm run test:jest`

> :warning: As is, this template, once deployed, opens a **public** endpoint within your AWS account resources. Anybody with the URL can actively execute the API Gateway endpoint and the corresponding lambda. You should protect this endpoint with the authentication method of your choice.

### Locally

In order to test the hello function locally, run the following command:

- `npx sls invoke local -f hello --path src/functions/hello/mock.json` if you're using NPM
- `yarn sls invoke local -f hello --path src/functions/hello/mock.json` if you're using Yarn

Check the [sls invoke local command documentation](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) for more information.

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --location --request POST 'https://myApiEndpoint/dev/hello' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Frederic"
}'
```

## Template features

### Project structure

The project is based on pattern of design [Repository Pattern], the project code base is mainly located within the `src` folder.
This folder is divided in:

- `functions` - containing the code and test configuration of the project
- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
├── src
│   ├── __tests__               # Test folder
│   │   └── functions
│   │   │   ├── people.test.ts
│   │   │   └── swapi.test.ts
│   │   │
│   ├── common                  # Configuration of constants, functions and shared source code folder
│   │   ├── constants
│   │   ├── http
│   │   └── utils
│   │   
│   ├── functions               # Lambda configuration and source code folder
│   │   ├── people
│   │   │   ├── functions
│   │   │   │   ├── create
│   │   │   │   │   ├── handler
│   │   │   │   │   └── index.ts
│   │   │   │   │
│   │   │   │   ├── delete
│   │   │   │   │   └── ...
│   │   │   │   ├── get
│   │   │   │   │   └── ...
│   │   │   │   ├── list
│   │   │   │   │   └── ...
│   │   │   │   └── update
│   │   │   │       └── ...
│   │   │   │
│   │   │   ├── interfaces
│   │   │   │   └── interface.ts
│   │   │   │
│   │   │   ├── repositories
│   │   │   │   └── people.repository.ts
│   │   │   │
│   │   │   └── schemas 
│   │   │       └── peopleSchemas.ts
│   │   │
│   │   ├── vehicles
│   │   │   ├── functions
│   │   │   │   └── ...
│   │   │   ├── interfaces
│   │   │   │   └── ...
│   │   │   ├── repositories
│   │   │   │   └── ...
│   │   │   └── schemas 
│   │   │       └── ...
│   │   │
│   │   └── index.ts            # Import/export of all lambda configurations
│   │
│   └── libs                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```

### 3rd party libraries

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file

### Advanced usage

Any tsconfig.json can be used, but if you do, set the environment variable `TS_NODE_CONFIG` for building the application, eg `TS_NODE_CONFIG=./tsconfig.app.json npx serverless webpack`


---
### Extra

#### MODELOS

  ```ts
 interface TestPeople {
    id?: string,
    first_name?: string,
    mass?: string,
    hair_color?: string,
    eye_color?: string,
    skin_color?: string,
    height?: string,
    gender?: string,
    birth_year?: string,
    created?: string,
    edited?: string
}

  // Ejemplo:
  {
	  first_name: 'Luke test',
      mass: '77 test',
      hair_color: 'Blond test',
      eye_color: 'Blue test',
      skin_color: 'Fair test',
      height: '172 test',
      gender: 'Male test',
      birth_year: '19  test'
  }
  
  interface Vehicle {
    id: number | string;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[]; // assuming pilots are identified by URLs
    films: string[]; // assuming films are identified by URLs
    created: string;
    edited: string;
    url: string;
}

  ```
---
usar esquemas es una buena practica.

tipado 