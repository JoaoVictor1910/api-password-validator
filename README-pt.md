
# api-password-validator (PT-BR)

O objetivo desta aplicação é ser uma API web para validação de senhas, seguindo um conjunto de regras.

## Índice

1. [Iniciar Projeto](#iniciar-projeto)
    - [Configurar Aplicação](#configurar-aplicacao)
    - [Especificações de Teste](#especificacoes-de-teste)
2. [Problema e Solução](#problema-e-solucao)
    - [Problema a Resolver](#problema-a-resolver)
    - [Regras de Validação](#regras-de-validacao)
    - [Solução](#solucao)
3. [Layered Architecture](#layered-architecture)
    - [Application Layer](#application-layer)
    - [Domain Layer](#domain-layer)
    - [Infrastructure Layer](#infrastructure-layer)
    - [Main Layer](#main-layer)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Contribuidores do Projeto](#contribuidores-do-projeto)

## Iniciar Projeto

Siga as instruções para iniciar o projeto corretamente e testar a aplicação.

### Configurar Aplicação

1. Primeiro, faça um fork do projeto.
2. Após fazer o fork do projeto, instale as dependências usando `npm i`.
3. Crie seu arquivo `.env` usando o `.env.example` como referência.
4. Execute seu projeto usando qualquer um dos seguintes scripts:
    - `npm run start` para um início simples
    - `npm run start:dev` para assistir os logs
    - `npm run start:debug` para depurar a aplicação

### Especificações de Teste

#### Testes Manuais
O endpoint para validar sua senha é o seguinte:<br>
`[POST] ${{localUrl}}/v1/password/validate`<br>
*valor padrão de localUrl: `http://localhost:3000`*

#### Request DTO:
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
Temos tanto testes de cobertura quanto testes e2e.
1. Coverage: `npm run test:cov`
2. E2E: `npm run test:e2e`

## Problema e Solução

Para validar a senha, recebemos uma senha e, em seguida, aplicamos um conjunto de regras; depois de validar a senha, retornamos se é verdadeira ou falsa.

### Problema a Resolver

- Validar todas as regras
- API eficiente
- Clean Code
- Escalabilidade

### Regras de Validação

- Nove ou mais caracteres
- Pelo menos um dígito
- Pelo menos uma letra maiúscula
- Pelo menos uma letra minúscula
- Pelo menos um caractere especial
    - Considere os caracteres especiais como: !@#$%^&*()-+
- Sem caracteres repetidos (sensível a maiúsculas e minúsculas)

### Solução

Considerando a arquitetura em camadas escolhida, não havia necessidade de nenhum provider, pois o serviço de validação poderia ser um arquivo de validador no domain.<br>
Também optei por criar uma entidade de senha e deixar o método "IsValid" para a entidade, porque encapsular a lógica de validação dentro da entidade garante que as regras de validação sejam sempre aplicadas sempre que a entidade for usada.

## Layered Architecture

Esta aplicação é baseada em um modelo de arquitetura em camadas, que consiste nas seguintes camadas:

### Application Layer

A camada application é responsável por coordenar as tarefas da aplicação e lidar com a entrada do usuário. Ela contém componentes como: controllers, view models, e outros elementos necessários para a interação do usuário.

### Domain Layer

O camada domain contém a lógica de negócios principal e os objetos de domínio. Ela inclui: entities, value objects, aggregates e domain events, também como services e repositories que encapsulam comportamentos específicos do domínio.

### Infrastructure Layer

A camada infrastructure é responsável por fornecer a base técnica para a aplicação. Ela inclui componentes como data access, networking, messaging, e outras utilidades que dão suporte às camadas de domain e application.

### Main Layer

A camada main serve como ponto de entrada da aplicação. Ela é responsável por inicializar e configurar os diferentes componentes e camadas da aplicação.

## Tecnologias Utilizadas

Esta aplicação modelo utiliza as seguintes tecnologias:

- **Backend:** Nest.js
- **Database:** -
- **Version Control:** Git e GitHub
- **CI/CD:** -
- **Testing:** Jest

## Contribuidores do Projeto

- [João Freire] ([github.com](https://github.com/JoaoVictor1910))
