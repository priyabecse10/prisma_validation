import { SALT_ROUNDS } from '../src/config/constants';
import * as bcrypt from 'bcrypt';

import {PrismaClient} from '@prisma/client';
const prisma=new PrismaClient();

async function main(){
    const usersData=[
        {
            id:1,
            name:'priya',
            role:'admin',
            email:'priyabecse10@gmail.com',
            password:await bcrypt.hash('12345678',SALT_ROUNDS),
            created_at:new Date(),
            updated_at:new Date()
        },
        {
            id:2,
            name:'vidya',
            role:'customer',
            email:'vidyaravichander@gmail.com',
            password:await bcrypt.hash('abcdefgh',SALT_ROUNDS),
            created_at:new Date(),
            updated_at:new Date()
        },
        {
            id:3,
            name:'sri',
            role:'customer',
            email:'srividya@yavar.in',
            password:await bcrypt.hash('abcd1234',SALT_ROUNDS),
            created_at:new Date(),
            updated_at:new Date()
        }
    ];
    for await (const userData of usersData) {
        await prisma.user.upsert({
          where: { id: userData.id },
          update: userData,
          create: userData
        });
      }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
  });