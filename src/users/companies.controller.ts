import {Controller,Get, Param,Post,Body, Put,ParseUUIDPipe} from "@nestjs/common";
import { Companieservice } from "src/companies/companies.service";
import { CompanyResponseDto, CreateCompanyDto, FindCompanyResponseDto } from "src/companies/dto/companies.dto";

@Controller('users/:userId/companies')
export class CompaniesUserController {
	constructor (private readonly Companiesservice:Companieservice){}
	@Get()
	getCompanies(
		@Param('userId') userId:string
		): FindCompanyResponseDto[]{
		return this.Companiesservice.getCompanyByUserId(userId);
	}

	@Post()
	createcompany(
		@Param('userId') userId:string,
		@Body() body: CreateCompanyDto
	):CompanyResponseDto{
		return this.Companiesservice.createCompany(body,userId)}
	@Put('/:companyId'/* ,new ParseUUIDPipe() */)
	updateuserCompany(
		@Param('userId') userId:string,
		@Param('companyId') companyId:string
	):CompanyResponseDto{
		return this.Companiesservice.updatesCompanyUser(userId,companyId)
	}
}