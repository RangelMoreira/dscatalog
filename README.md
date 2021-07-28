# DS Catalog

[![NPM](https://camo.githubusercontent.com/a581cd1e13be14972f2eca7065fa686ab5718b9c233570190f92be36ed39664e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7265616374)](https://github.com/RangelMoreira/dscatalog/blob/main/LICENSE)

# Sobre o projeto

http://kevin-dscatalog.netlify.app/

DS Catalog é uma aplicação Full Stack web e mobile construída durante o Bootcamp  **Spring React**, ministrado pela [DevSuperior](https://devsuperior.com/).

O software consiste em uma aplicação de catálogo de produtos, onde há três tipos de permissões, a do usuário não autenticado, que pode apenas visualizar os produtos, a do usuário com perfil operador, que pode também adicionar categorias ou produtos e a do usuário administrador, que além das outras permissões, também pode gerenciar os outros usuários da aplicação.

Neste projeto também foram trabalhados tópicos como testes com Junit, integração com storage de imagens na AWS, além de CI/CD e implantação com Docker e AWS. 

## Layout web

![Web 1](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/home-frontend.png)

![Web 2](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/catalogo-frontend.png)

![Web 3](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/produtos-frontend.png)

![Web 4](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/produtos-edicao-frontend.png)

![Web 5](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/formulario-usuarios-frontend.png)

## Modelo conceitual

[![Modelo Conceitual](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/modelo-conceitual.png)](https://raw.githubusercontent.com/RangelMoreira/dsdeliver-sds2/main/assets/modelo-conceitual.png)

# Tecnologias utilizadas

## Back end

- Java
- Spring Boot
- JPA / Hibernate
- Maven
- OAuth/JWT
- Junit

## Front end

- HTML / CSS / Sass/ Bootstrap/ JS / TypeScript
- ReactJS
- Axios
- React Hook Forms
- React Select

## Implantação em produção

- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql
- Upload de imagens: Amazon S3

# Como executar o projeto

## Back end

Pré-requisitos: Java 11

```
# clonar repositório
git clone https://github.com/RangelMoreira/dscatalog.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web

Pré-requisitos: npm / yarn

```
# clonar repositório
git clone https://github.com/RangelMoreira/dscatalog.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Kevin Rangel Moreira

https://www.linkedin.com/in/kevin-rangel-moreira/