import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS if needed (adjust origins as necessary)
  app.enableCors();

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 7777; // Use env var or default

  await app.listen(port);
  console.log(`Backend application is running on: http://localhost:${port}`);
}
bootstrap();
