import { BadRequestException } from "@nestjs/common";

export class RelationsToOtherPagesException extends BadRequestException {
    constructor() {
        super("Stránka obsahuje návaznost na jiné stránky.");
    }
}
