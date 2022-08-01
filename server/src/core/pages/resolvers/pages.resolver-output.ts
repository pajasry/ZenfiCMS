import { ObjectType } from "@nestjs/graphql";
import { ItemsOutput } from "@/helpers/output";
import { PagesEntity } from "@/pages/entities/pages.entity";

@ObjectType()
export class PagesOutput extends ItemsOutput(PagesEntity) {}
