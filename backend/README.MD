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
***
# Private router Middleware
* Using the same architecture the application will use a service and controller to make the route   
    * `services/user/DetailsUserServices.ts` and `controller/user/DetailsUserController.ts`
* The we create the router `/me`
* Now create the middleware to validate the JWT.
* New folder named `middlewares` on `src`.
* And create de file named `idAuth.ts`
```ts
export function isAuth(req:Request, res:Response, next:NextFunction){
    console.log("Middleware working!")
    next()
}
```
* And import to router and use as middleware on router `/me`
    * `.get("/me", isAuth, new DetailsUserController().handle)`
* In the middleware created import method `verify` fom jsonwebtoken.
```ts
interface PayLoad{
    //id from JWT
    sub:string
}

export function isAuth(req:Request, res:Response, next:NextFunction){
    //Receive JWT
    const tokenAuth = req.headers.authorization
    //Validation if are token []
    if(!tokenAuth){
        return res.status(401).end()
    }

    //GET TOKEN
    const [,token] = tokenAuth.split(" ")
    console.log(token)
    //Validate token
    try {
        //Verify with jsonwebtoken using TS interface
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad
        //if is okay
        return next()
    } catch (error) {
        return res.status(401).end()
    }
}
```
* Let's inject the user_id on Request
* But first we need overwrite the type of Request.
* New folder named `@types` on `src` and folder `express` inside the `@types`.
* Create a file named `index.d.ts`
```ts
declare namespace Express{
    export interface Request{
        user_id: string
    }
}
```
* Now we added inside the Request
* Now we config the TypesScript on `tsconfig.json`
    * inside typeRoots we pass the way to our file
* Back to middleware we write:
    * `req.user_id = sub` before the `return next()`

* Now in the controller `DetailsUserController.ts` we can user the `user_id`
    * `const user_id = req.user_id`
* Pass the user_id as parameter to `DetailsUserService.execute()`
* After go to service file and make a search to database.