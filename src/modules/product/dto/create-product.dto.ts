import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(2)
    name:string

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    price:number

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    count:number
}
