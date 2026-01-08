import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,          // Strip unknown properties
    forbidNonWhitelisted: true,
    transform: true,          // Auto-convert types
  }));
const config = new DocumentBuilder()
    .setTitle('Task API')
    .setDescription('Secure task management API with JWT auth')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('API docs at http://localhost:3000/api');
}
bootstrap();
