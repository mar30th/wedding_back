import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(express.static('.'))

  const config = new DocumentBuilder().setTitle("Wedding").build();
  const document = SwaggerModule.createDocument(app, config);
  // localhost:8080/swagger
  SwaggerModule.setup("/swagger", app, document);

  await app.listen(8080);
}
bootstrap();
