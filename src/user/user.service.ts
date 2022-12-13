import { Injectable } from '@nestjs/common';
import { SALT_ROUNDS } from 'src/config/constants';
import { PrismaService } from 'src/config/database';
import * as bcrypt from 'bcrypt';
import { UserSignupBodyParams } from 'src/entities/session/session-request.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(
        private prisma:PrismaService
    ){}
    async getUserByEmail(email:string){
        const user=this.prisma.user.findFirst({
            where:{
                email:email,
            },
        });
    return user;
    }
    async signupUser(userAttributes:UserSignupBodyParams){
        const currentDate=new Date();
        const userCreateAttributes=(
            id:number,
            name:string,
            role:string,
            email:string,
            password:string,
            created_at:Date,
            updated_at:Date
        )=>{
            return Prisma.validator<Prisma.UserCreateInput>()({
                id,
                name,
                role,
                email,
                password,
                created_at,
                updated_at
           })
        };
        const user=await this.getUserByEmail(userAttributes.email);
        if(user) throw Error ("Email already exist")
        else{
        const createdUser=await this.prisma.user.create({
            data:userCreateAttributes(
                userAttributes.id,
                userAttributes.name,
                userAttributes.role,
                userAttributes.email,
                await bcrypt.hash(userAttributes.password,SALT_ROUNDS),
                currentDate,
                currentDate
            ),
            });
            return createdUser;
        
    }
}
}
