import { ObjectType } from "@nestjs/graphql";

import { ItemOutput, ItemsOutput } from "@/helpers";
import { PageStatusEntity } from "@/page/entities/pageStatus.entity";

@ObjectType()
export class PageStatusesOutput extends ItemsOutput(PageStatusEntity) {}

@ObjectType()
export class PageStatusOutput extends ItemOutput(PageStatusEntity) {}
