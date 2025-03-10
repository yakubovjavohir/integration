import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserDetailDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    age:number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fullName:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    gender:string

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    userId:number
}
