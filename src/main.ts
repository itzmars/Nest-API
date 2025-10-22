import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Security middlewares
  app.use(helmet());  // protects against common web vulnerabilities
  app.use(morgan('dev'));  // logs incoming requests

  // Enable global validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));



  // Start server on env PORT or fallback 3333
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
function morgan(arg0: string): any {
  throw new Error('Function not implemented.');
}

