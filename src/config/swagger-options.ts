import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOption = new DocumentBuilder()
  .setTitle("One Store API's")
  .setDescription(
    'Building a blazing fast REST API with Node.js, Postgresql, Nest and Swagger',
  )
  .setVersion('1.0')
  .addServer('HTTP')
  .addServer('HTTPS')
  .addApiKey({
    type: 'http',
  })
  .build();
