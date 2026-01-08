import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsIn } from 'class-validator';

export class CreateTaskDto {
    @ApiProperty({
        example: 'Learn NestJS',
        description: 'Title of the task (required)',
    })
    @IsString()
    title: string;  // Now required + validated

    @ApiProperty({
        example: 'Complete the portfolio project',
        description: 'Optional description',
        required: false,
    })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        enum: ['PENDING', 'IN_PROGRESS', 'DONE'],
        example: 'IN_PROGRESS',
        description: 'Task status (optional, defaults to PENDING)',
        required: false,
    })
    @IsIn(['PENDING', 'IN_PROGRESS', 'DONE'])
    @IsOptional()
    status?: 'PENDING' | 'IN_PROGRESS' | 'DONE';
}

export class UpdateTaskDto {
       @ApiProperty({
        example: 'Learn NestJS',
        description: 'Title of the task (required)',
    })
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        enum: ['PENDING', 'IN_PROGRESS', 'DONE'],
        example: 'IN_PROGRESS',
        description: 'Task status (optional, defaults to PENDING)',
        required: false,
    })
    @IsIn(['PENDING', 'IN_PROGRESS', 'DONE'])
    @IsOptional()
    status?: 'PENDING' | 'IN_PROGRESS' | 'DONE';
}