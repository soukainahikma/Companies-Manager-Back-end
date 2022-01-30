import {MiddlewareConsumer, Module,NestModule ,RequestMethod} from '@nestjs/common';
import { ValidUsersMiddleware } from 'src/common/middleware/validUsers.middleware';
import { CompaniesModule } from 'src/companies/companies.module';
import { CompaniesUserController } from './companies.controller';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
    imports:[CompaniesModule],
    controllers: [UserController,CompaniesUserController],
    providers: [UserService]
})
export class UserModule {}
