import { Field, ObjectType } from "@nestjs/graphql";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { PublicationStatusesEntity } from "@/core/publicationStatuses";
import { UsersEntity } from "@/core/users";

@ObjectType()
@Entity("posts")
export class PostsEntity {
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
    @ManyToOne(() => UsersEntity, (e) => e.posts)
    author: UsersEntity;
}
