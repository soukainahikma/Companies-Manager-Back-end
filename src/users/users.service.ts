import { HttpException, Injectable } from '@nestjs/common';
import { users } from 'src/db';
import {v4 as uuid } from "uuid"
import { CreateUserDto, FindUsersResponseDto, UsersResponseDto, UpdateUserDto, Login} from './dto/user.dto';
@Injectable()
export class UserService {
   private Users = users;
    getUsers():FindUsersResponseDto[]{
        return(this.Users)
    }
    getUserById(UserId :string) :FindUsersResponseDto
    {
        return this.Users.find(User => {
            return User.id === UserId
        })
    }
    createUser(payload: CreateUserDto):UsersResponseDto{
        const tmp =this.Users.find(User => {
            return User.email === payload.email
        })
        if(tmp)
            throw new HttpException("User Already Exists",400);
        let newUser ={
            id: uuid(),
            ...payload
        }
        this.Users.push(newUser)
        return newUser
    }
    updateUser(payload: UpdateUserDto,UserId:string)
    {
        let updatedUser:UsersResponseDto;
        const updatedUserList = this.Users.map(User =>{
            if(User.id ==UserId)
            {
                updatedUser = {
                    id:UserId,
                    ...payload
                }
                return updatedUser
            }
            else return User
        });
        this.Users = updatedUserList;
        return updatedUser
    }
    loginUser(login: Login) {
        const tmp = this.Users.find(user => user.email === login.email)
        if (!tmp)
            throw new HttpException("User Not Found",404);
            if (tmp.password !== login.password)
            throw new HttpException("Wrong Password",404);
        return tmp;
    }
}