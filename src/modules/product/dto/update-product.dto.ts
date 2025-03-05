import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class UpdateProductDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(50)
    @MinLength(2)
    name:string

    @ApiProperty()
    @IsInt()
    @IsOptional()
    price:number

    @ApiProperty()
    @IsInt()
    @IsOptional()
    count:number
}
