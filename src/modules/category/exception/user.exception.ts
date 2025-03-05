import { HttpException, HttpStatus } from "@nestjs/common";


export class CategoryNotFound extends HttpException {
    constructor(){
        super("category not found", HttpStatus.NOT_FOUND)
    }
}

export class CategoryExist extends HttpException {
    constructor(){
        super("this category exist", HttpStatus.BAD_REQUEST)
    }
}