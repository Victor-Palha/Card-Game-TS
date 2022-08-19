# Project card-game
***
## Start project
* The dependencies are in `package.json`
* The project will use MySQL and MongoDB databases
***
## Databases and modules
* The MySQL use Prisma.io to create the Models on `primsa/schema.prisma`
* To create new user the application user controllers and services
    * The controllers communitate to services where are all logistic to create users
***
## Create users
*Create user needs PrismaClient `src/prisma/index.ts` imported on service.
    * Using prismaClient to create the user and make the validations!
***
## Encrypt Password
* `src/services/user/createUserService.ts`
* The project use `bcryptjs` to encrypt passwords
* And use type to bcrypt `@types/bcryptjs -D`
***
## Create user login
* New file in services named `AuthUserService` will make the login
* New file in controller to connect to the new service
***
# Using JWT
* The application will use JWT to authenticate users in the API REST
* When the user make login in the application the JSON WEB TOKEN will return the token
* To make the servite to gerate the token we will do it in `src/services/AuthUserService`
* `yarn add jsonwebtoken`
* `yarn add @types/jsonwebtoken -D`
* For secrect password from JWT we will put in enviromment variables.
```ts
const token = sign(
    {
        name: user.username,
        email: user.email
    },
        process.env.JWT_SECRET,
    {
        subject: id,
        expiresIn: '30d'
    }
)
```