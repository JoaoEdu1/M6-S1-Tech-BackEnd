import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateContactDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    phone: string;
}
