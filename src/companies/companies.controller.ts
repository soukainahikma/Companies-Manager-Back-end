import {Controller,Get, Post, Put,Param,Body, ParseUUIDPipe} from "@nestjs/common";
import {CreateCompanyDto, UpdateCompanyDto,FindCompanyResponseDto, CompanyResponseDto } from './dto/companies.dto'
import { Companieservice } from "./companies.service";

@Controller('companies')
export class CompaniesController {
	constructor(private readonly companiesService:Companieservice){}
	@Get()
	getcompanies():FindCompanyResponseDto[]{
		return this.companiesService.getcompanies()
	}
	@Get('/:companyId')
	getcompaniesById(
		@Param('companyId', new ParseUUIDPipe()) companyId:string
	): FindCompanyResponseDto{
		return this.companiesService.getCompanyById(companyId)
	}
}
