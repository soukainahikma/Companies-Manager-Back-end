

export class FindUsersResponseDto{
    id:string;
    name:string;
    email:string;
    password:string;
    role:string;
}

export class UsersResponseDto{
    id:string;
    name:string;
    email:string;
    password:string;
    role:string;
}

export class CreateUserDto{
    name:string;
    email:string;
    password:string;
    role:string;
}

export class UpdateUserDto{
    name:string;
    email:string;
    password:string;
    role:string;
}

export class Login {
    email: string;
    password:string;
}