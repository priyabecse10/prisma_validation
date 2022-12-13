import { ApiProperty } from '@nestjs/swagger';

export class SignupSuccessResponse {
  @ApiProperty()
  message: string;
}

export const signinSuccessResponse = {
  schema: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      role: { type: 'string' },
      email: { type: 'string' },
      created_at: { type: 'string' },
      updated_at: { type: 'string' },
    },
  },
};

export class SignoutSuccessResponse {
  @ApiProperty()
  message: string;
}
