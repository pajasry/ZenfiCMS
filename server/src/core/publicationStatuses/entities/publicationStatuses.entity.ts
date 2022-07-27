import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity("publicationStatuses")
export class PublicationStatusesEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    name: string;
}
