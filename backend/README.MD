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