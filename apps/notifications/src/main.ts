import { NestFactory } from '@nestjs/core';
import { NotificationsModule } from './notifications.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationsModule);
  await app.listen(process.env.port ?? 6000);
}
bootstrap();
