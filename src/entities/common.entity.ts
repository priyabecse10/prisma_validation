import { ApiProperty } from '@nestjs/swagger';

export class ErrorMessage {
  @ApiProperty()
  errors: string[];
}

export class Header {
  @ApiProperty()
  Authorization: string;
}

export const pagination = {
  pagination: {
    type: 'object',
    properties: {
      end_at: { type: 'number' },
      per_page: { type: 'number' },
      start_at: { type: 'number' },
      prev_page: { type: 'number' },
      next_page: { type: 'number' },
      total_pages: { type: 'number' },
      total_count: { type: 'number' },
      current_page: { type: 'number' },
      is_last_page: { type: 'boolean' },
      is_first_page: { type: 'boolean' },
    },
  },
};
