import { Injectable, ForbiddenException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

async create(userId: number, dto: CreateTaskDto) {
  try {
    return await this.prisma.task.create({
      data: {
        ...dto,
        userId,
      },
    });
  } catch (error) {
    if (error.code === 'P2002') {
      throw new BadRequestException('Task title must be unique'); // if you add unique constraint later
    }
    throw error; // Let ValidationPipe handle others
  }
}

  async findAll(userId: number) {
    return this.prisma.task.findMany({
      where: { userId },
    });
  }

  async findOne(id: number, userId: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task || task.userId !== userId) throw new ForbiddenException('Access denied');
    return task;
  }

  async update(id: number, userId: number, dto: UpdateTaskDto) {
    await this.checkOwnership(id, userId);
    return this.prisma.task.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number, userId: number) {
    await this.checkOwnership(id, userId);
    return this.prisma.task.delete({ where: { id } });
  }

  private async checkOwnership(id: number, userId: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task || task.userId !== userId) throw new ForbiddenException('Access denied');
  }
}