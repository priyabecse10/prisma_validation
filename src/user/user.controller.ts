import { Body, Controller, Header, Post, Req, Res } from "@nestjs/common";
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse, ApiUnprocessableEntityResponse } from "@nestjs/swagger";
import { FastifyReply, FastifyRequest } from "fastify";
import { ReplaySubject } from "rxjs";
import { MESSAGE } from "src/config/constants";
import { ErrorMessage, SignupSuccessResponse, UserSignupBodyParams } from "src/entities";
import { UserService } from "./user.service";

@ApiTags('user')
@ApiUnauthorizedResponse({
    description:'user not found',
    type:ErrorMessage,
})
@ApiUnprocessableEntityResponse({
    description:'Validation errors',
    type:ErrorMessage
})
@ApiInternalServerErrorResponse({
    description:'Something went wrong',
    type:ErrorMessage,
})
@Controller()
export class UserController{
    constructor(private userService:UserService){}
    @ApiResponse({
        description:'bearer token',
        type:Header,
    })
    @ApiCreatedResponse({
        description:'Signup success response',
        type:SignupSuccessResponse,
    })
    @Post('signup')
    async signupUser(
        @Req() req:FastifyRequest,
        @Res() reply:FastifyReply,
        @Body() userAttrs:UserSignupBodyParams,
    ){
            try{
                const user=await this.userService.signupUser(userAttrs);
                const result={
                    id:user.id,
                    name:user.name,
                    role:user.role,
                    email:user.email,
                    password:user.password,
                    created_at: user.created_at,
                };
                reply.code(201).send({result,message:MESSAGE.signupOtpMessage});
                //reply.code(200).send(result);
            }catch(error){
                reply.send(error);            }
        }
    
}
