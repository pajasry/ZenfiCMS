import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { PublicationStatusesEntity } from "@/publicationStatuses/entities/publicationStatuses.entity";
import { UsersEntity } from "@/users/entities/users.entity";

@ObjectType()
@Entity("pages")
export class PagesEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    description: string;

    @Field()
    @CreateDateColumn()
    createdAt: string;

    @Field()
    @UpdateDateColumn()
    updatedAt: string;

    @Field(() => PublicationStatusesEntity)
    @ManyToOne(() => PublicationStatusesEntity)
    status: PublicationStatusesEntity;

    @Field(() => UsersEntity)
    @ManyToOne(() => UsersEntity, (e) => e.pages)
    author: UsersEntity;
}
