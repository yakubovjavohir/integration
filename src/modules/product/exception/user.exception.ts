import { HttpException, HttpStatus } from "@nestjs/common";


export class ProductNotFound extends HttpException {
    constructor(){
        super("product not found", HttpStatus.NOT_FOUND)
    }
}

export class ProductExist extends HttpException {
    constructor(){
        super("product exist", HttpStatus.BAD_REQUEST)
    }
}