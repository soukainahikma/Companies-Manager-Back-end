import {MiddlewareConsumer, Module,NestModule ,RequestMethod} from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { Companieservice } from './companies.service';

@Module({
    controllers: [CompaniesController],
    providers: [Companieservice],
    exports: [Companieservice]
})
export class CompaniesModule {}
