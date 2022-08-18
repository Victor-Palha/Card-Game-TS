# Project card-game
***
* The dependencies are in `package.json`
* The project will use MySQL and MongoDB databases
***
* The MySQL use Prisma.io to create the Models on `primsa/schema.prisma`
* To create new user the application user controllers and services
    * The controllers communitate to services where are all logistic to create users
***
*Create user needs PrismaClient `src/prisma/index.ts` imported on service.
    * Using prismaClient to create the user and make the validations!
***