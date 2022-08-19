import { ObjectType, PickType } from "@nestjs/graphql";

import { ItemOutput, ItemsOutput } from "@/helpers";
import { PageEntity } from "@/page/entities/page.entity";

@ObjectType()
export class PagesOutput extends ItemsOutput(PageEntity) {}

@ObjectType()
export class PageOutput extends ItemOutput(PageEntity) {}

@ObjectType()
export class ClientPageOutput extends ItemOutput(
    PickType(PageEntity, ["path", "status", "name", "description"])
) {}
