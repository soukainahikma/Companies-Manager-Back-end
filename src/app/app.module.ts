import { Module } from '@nestjs/common';
import { CompaniesModule } from 'src/companies/companies.module';
import { UserModule } from 'src/users/users.module';


@Module({
  imports: [UserModule,CompaniesModule],
})
export class AppModule {}
