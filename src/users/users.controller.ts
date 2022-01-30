import {Controller,Get, Post, Put,Param,Body, ParseUUIDPipe} from "@nestjs/common";
import {CreateUserDto, UpdateUserDto,FindUsersResponseDto, UsersResponseDto, Login } from './dto/user.dto'
import { UserService } from "./users.service";

@Controller('users')
export class UserController {
	constructor(private readonly UserService:UserService){}
	@Get()
	getUser():FindUsersResponseDto[]{
		return this.UserService.getUsers()
	}
	@Get('/:UserId')
	getUserById(
		@Param('UserId', new ParseUUIDPipe()) userId:string
	): FindUsersResponseDto{
		return this.UserService.getUserById(userId)
	}
	@Post()
	createuser(
		@Body() body: CreateUserDto
	):UsersResponseDto{
		return this.UserService.createUser(body)
	
	}
	@Put('/:userId')
	updateuser(
		@Param('userId', new ParseUUIDPipe()) userId:string,
		@Body() body : UpdateUserDto//
	):UsersResponseDto{
		return this.UserService.updateUser(body,userId)
	}
	@Post('/login')
	login(@Body() body: Login){
		return this.UserService.loginUser(body)	
	}
}
