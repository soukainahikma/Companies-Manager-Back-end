import {HttpException, Injectable } from '@nestjs/common';
import { companies } from 'src/db';
import {v4 as uuid } from "uuid"
import { CreateCompanyDto, FindCompanyResponseDto, CompanyResponseDto, UpdateCompanyDto} from './dto/companies.dto';
@Injectable()
export class Companieservice {
   private companies = companies;
    getcompanies():FindCompanyResponseDto[]{
        return(this.companies)
    }
    getCompanyById(CompanyId :string) :FindCompanyResponseDto
    {
        return this.companies.find(Company => {
            return Company.id === CompanyId
        })
    }
    createCompany(payload: CreateCompanyDto,userId:string):CompanyResponseDto{
        const tmp =this.companies.find(company => {
            return company.email === payload.email
        })
        if(tmp)
            throw new HttpException("Company Already Exists",400);
        let newCompany = {
            id: uuid(),
            ...payload,
            user:userId
        }
        this.companies.push(newCompany)
        return newCompany
    }
    getCompanyByUserId(UserId:string): FindCompanyResponseDto[]{
        return this.companies.filter(Company => {
            return Company.user === UserId
        })
    }
    updatesCompanyUser(UserId: string,CompanyId: string):CompanyResponseDto
    {
        let updatedCompany:CompanyResponseDto;
        const updatedCompanyList = this.companies.map(Company =>{
            if(Company.id ==CompanyId)
            {
                updatedCompany = {
                    ...Company,
                    user:UserId
                }
                return updatedCompany
            }
            else return Company
        });
        this.companies = updatedCompanyList;
        return updatedCompany
    }
}
