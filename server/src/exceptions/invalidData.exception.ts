import { HttpException } from "@nestjs/common";

export class InvalidDataException extends HttpException {
    constructor() {
        super("Neplatné údaje", 400);
    }
}
