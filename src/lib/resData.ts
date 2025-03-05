interface IMeta {
    statusCode:number,
    message:string
}

export class ResData<TypeData> {
    meta:IMeta
    constructor(statusCode:number, message:string, public data:TypeData | null = null){
        this.data = data
        this.meta = {
            statusCode,
            message
        }
    }
}