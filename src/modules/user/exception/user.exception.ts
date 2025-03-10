import { HttpException, HttpStatus } from "@nestjs/common";


export class UserNotFound extends HttpException {
    constructor(){
        super("user not found", HttpStatus.NOT_FOUND)
    }
}

export class UserPhoneExist extends HttpException {
    constructor(){
        super("phone exist", HttpStatus.BAD_REQUEST)
    }
}