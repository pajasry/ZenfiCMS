import { ObjectType } from "@nestjs/graphql";
import { PublicationStatusesEntity } from "@/publicationStatuses/entities/publicationStatuses.entity";
import { ItemOutput, ItemsOutput } from "@/helpers/outputs";

@ObjectType()
export class PublicationStatusesOutput extends ItemsOutput(
    PublicationStatusesEntity
)<PublicationStatusesEntity> {}

@ObjectType()
export class PublicationStatusOutput extends ItemOutput(
    PublicationStatusesEntity
)<PublicationStatusesEntity> {}
