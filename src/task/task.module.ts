import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }),AuthModule],
  providers: [TaskService,PrismaService,JwtStrategy],
  controllers: [TaskController]
})
export class TaskModule {}
