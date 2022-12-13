//import { assert, number, object, string } from "superstruct";
const {assert,number,object,string}=require ('superstruct')
const isEmail =require ('isemail')
const User=object({
    id:number(),
    name:size(string(),2,50),
    email:string(),
})

const data={
    id:42,
    name:"jane",
    email:"abcd@gmail.com",
}

assert(data, User)