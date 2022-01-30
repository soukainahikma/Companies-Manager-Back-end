import { Injectable, NestMiddleware, HttpException } from "@nestjs/common"
import {Request, Response, NextFunction} from "express"
import {users} from "../../db"

@Injectable()
export class ValidUsersMiddleware implements NestMiddleware {
    use(req: Request,res:Response,next:NextFunction){
        console.log("this middleware was called")
        const userId = req.params.UserId;
        const userExists = users.some(User=> {
            return User.id === userId
        });
        if(!userExists){
            throw new HttpException("Users not found",400)
        }
        next()
    }
}