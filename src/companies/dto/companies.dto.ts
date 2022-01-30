
// company name, address, contact e-mail address
//, start date (date picker).  , Fiscal 
//year end date (date picker) and status (can be active or disabled
export class FindCompanyResponseDto{
    id:string;
    company_name: string;
    address: string;
    email: string;
    start_date: string;
    fiscal_date: string;
    status: boolean;
    user:string;
}

export class CompanyResponseDto{
    id:string;
    company_name: string;
    address: string;
    email: string;
    start_date: string;
    fiscal_date: string;
    status: boolean;
    user:string;
}

export class CreateCompanyDto{
    company_name: string;
    address: string;
    email: string;
    start_date: string;
    fiscal_date: string;
    status: boolean;
}

export class UpdateCompanyDto{
    company_name: string;
    address: string;
    email: string;
    start_date: string;
    fiscal_date: string;
    status: boolean;
}