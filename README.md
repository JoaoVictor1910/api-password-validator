# api-password-validator (EN-US)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/JoaoVictor1910/api-password-validator/blob/main/README.pt.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/JoaoVictor1910/api-password-validator/blob/main/README.md)

The purpose of this application is to be an api-web for password validation, following a set of rules.

## Table of Contents

1. [Start project](#start-project)
    - [Configurate App](#configurate-app)
    - [Test Specifications](#test-specifications)
2. [Problem and Resolution](#problem-and-resolution)
    - [Problem To Solve](#problem-to-solve)
    - [Validation Rules](#validation-rules)
    - [Resolution](#resolution)
3. [Layered Architecture](#layered-architecture)
    - [Application Layer](#application-layer)
    - [Domain Layer](#domain-layer)
    - [Infrastructure Layer](#infrastructure-layer)
    - [Main Layer](#main-layer)
4. [Technologies Used](#technologies-used)
5. [Project Contributors](#project-contributors)

## Start Project

Follow the instructions to start the project correctly and test the application.

### Configurate App

1. First, fork the project.
2. After forking the project, install the dependencies using `npm i`.
3. Create your `.env` file, using the `.env.example` as a reference.
4. Run your project using any of the following scripts:
    - `npm run start` for a simple start
    - `npm run start:dev` for watching the logs
    - `npm run start:debug` for debugging the application

### Test Specifications

#### Manual Tests
The endpoint to validate your password is the following:<br>
`[POST] ${{localUrl}}/v1/password/validate`<br>
*localUrl default value: `http://localhost:3000`*

#### Request Dto:
```typescript
class ValidatePasswordDto {
  @IsString()
  input: string;
}
``` 
#### Response:
```typescript
interface ValidatePasswordResponse {
  isValid: boolean;
}
``` 

#### Unit Tests:
We have both coverage tests and e2e tests.
1. Coverage: `npm run test:cov`
2. E2E: `npm run test:e2e`

## Problem and Resolution

To validate the password, we apply our input into a set of rules; after validating the password, we return whether it's either true or false

### Problem To Solve

- Validate all rules
- Efficient api
- Clean Code
- Scalability

### Validation Rules

- Nine or more characters
- At least one digit
- At least one uppercase letter
- At least one lowercase letter
- At lease one special character
    - Consider special characters as: !@#$%^&*()-+
- No repeated characters (case sensitive)

### Resolution

Considering the layered architecture chosen, there was no need for any provider, as the validation service could be a validator file on the domain layer.<br>
I also opted for creating a password entity and leaving the "IsValid" method for the entity, because encapsulating the validation logic within the entity ensures that the validation rules are always applied whenever the entity is used.

## Layered Architecture

This application is based on a layered architecture model, which consists of the following layers:

### Application Layer

The application layer is responsible for coordinating application tasks and handling user input. It contains components such as controllers, view models, and other elements needed for user interaction.

### Domain Layer

The domain layer contains the core business logic and domain objects. It includes entities, value objects, aggregates, and domain events, as well as services and repositories that encapsulate domain-specific behavior.

### Infrastructure Layer

The infrastructure layer is responsible for providing the technical foundation for the application. It includes components such as data access, networking, messaging, and other utilities that support the domain and application layers.

### Main Layer

The main layer serves as the entry point of the application. It is responsible for initializing and configuring the different components and layers of the application.

## Technologies Used

This template application utilizes the following technologies:

- **Backend:** Nest.js
- **Database:** -
- **Version Control:** Git and GitHub
- **CI/CD:** -
- **Testing:** Jest

## Project Contributors

- [João Freire] ([github.com](https://github.com/JoaoVictor1910))
