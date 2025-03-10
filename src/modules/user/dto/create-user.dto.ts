import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    @MinLength(12)
    phone:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(15)
    @MinLength(6)
    password:string
}
