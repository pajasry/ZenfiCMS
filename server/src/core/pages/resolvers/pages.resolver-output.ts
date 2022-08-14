import { ObjectType } from "@nestjs/graphql";
import { ItemOutput, ItemsOutput } from "@/helpers/outputs";
import { PagesEntity } from "@/pages/entities/pages.entity";

@ObjectType()
export class PagesOutput extends ItemsOutput(PagesEntity)<PagesEntity> {}

@ObjectType()
export class PageOutput extends ItemOutput(PagesEntity)<PagesEntity> {}
