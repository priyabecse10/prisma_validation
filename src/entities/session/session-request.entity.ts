import { ApiAcceptedResponse, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Length, IsString, IsEmail, IsOptional, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';

export class UserSignupBodyParams {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id:number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  @Length(0, 30,{
    message:'name length should be less than 30'
  })
  name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  role: string;
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  @Length(8,15)
  password: string;
}




