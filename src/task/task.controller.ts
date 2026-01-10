import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/role.guards';
import { Roles } from 'src/auth/decorators/role.decorator';

@UseGuards(AuthGuard('jwt'))
@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @ApiOperation({ summary: 'Create a new task' })
    @ApiResponse({ status: 201, description: 'Task created' })
    create(@Request() req, @Body() dto: CreateTaskDto) {
        return this.taskService.create(req.user.userId, dto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all my tasks' })
    findAll(@Request() req) {
        return this.taskService.findAll(req.user.userId);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a tasks by id' })
    findOne(@Param('id') id: string, @Request() req) {
        return this.taskService.findOne(+id, req.user.userId);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update my tasks' })
    update(@Param('id') id: string, @Request() req, @Body() dto: UpdateTaskDto) {
        return this.taskService.update(+id, req.user.userId, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete my tasks' })
    remove(@Param('id') id: string, @Request() req) {
        return this.taskService.remove(+id, req.user.userId);
    }
}