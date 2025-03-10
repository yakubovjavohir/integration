import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class UpdateUserDetailDto {
    @ApiProperty()  
    @IsInt()
    @IsOptional()
    age:number

    @ApiProperty()  
    @IsString()
    @IsOptional()
    fullName:string

    @ApiProperty()  
    @IsString()
    @IsOptional()
    gender:string

    @ApiProperty()  
    @IsInt()
    @IsOptional()
    user_id:number
}
