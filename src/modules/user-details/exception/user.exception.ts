import { HttpException, HttpStatus } from "@nestjs/common";


export class UserDetailsNotFound extends HttpException {
    constructor(){
        super("user details not found", HttpStatus.NOT_FOUND)
    }
}
