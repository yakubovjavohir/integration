import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class UpdateUserDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(12)
    @MinLength(12)
    phone:string

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(15)
    @MinLength(6)
    password:string
}