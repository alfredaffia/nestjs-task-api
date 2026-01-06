import { IsString, IsOptional, IsIn } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;  // Now required + validated

  @IsString()
  @IsOptional()
  description?: string;

  @IsIn(['PENDING', 'IN_PROGRESS', 'DONE'])
  @IsOptional()
  status?: 'PENDING' | 'IN_PROGRESS' | 'DONE';
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsIn(['PENDING', 'IN_PROGRESS', 'DONE'])
  @IsOptional()
  status?: 'PENDING' | 'IN_PROGRESS' | 'DONE';
}