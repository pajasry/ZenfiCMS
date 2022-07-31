import { PublicationStatusesEntity } from "@/publicationStatuses/entities/publicationStatuses.entity";

export type CreatePublicationStatusRepositoryDto = Pick<PublicationStatusesEntity, "name">;
