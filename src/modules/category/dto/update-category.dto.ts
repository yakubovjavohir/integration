import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString} from "class-validator"

export class UpdateCategoryDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    name:string
}
