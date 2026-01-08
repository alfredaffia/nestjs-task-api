import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class RegisterDto {
    @ApiProperty({ example: 'alfred@test.com', description: 'User email' })
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @ApiProperty({ example: 'secret123', description: 'Password (min 6 chars)', minLength: 6 })
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    password: string;

    @ApiProperty({ example: 'Alfred', required: false })
    @IsString()
    @IsOptional()
    name?: string;
}

export class LoginDto {
    @ApiProperty({ example: 'alfred@test.com', description: 'User email' })
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @ApiProperty({ example: 'secret123', description: 'Password (min 6 chars)', minLength: 6 })
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    password: string;
}