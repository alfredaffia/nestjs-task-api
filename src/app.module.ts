import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ // Add this – loads .env globally
      isGlobal: true, // Makes ConfigService available everywhere
      envFilePath: '.env',
    }),
    AuthModule,PrismaModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
