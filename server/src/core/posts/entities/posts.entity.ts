import { Field, ObjectType } from "@nestjs/graphql";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { PublicationStatusesEntity } from "@/publicationStatuses/entities/publicationStatuses.entity";
import { UsersEntity } from "@/users/entities/users.entity";

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
    @ManyToOne(() => PublicationStatusesEntity, { eager: true })
    status: PublicationStatusesEntity;

    @Field(() => UsersEntity)
    @ManyToOne(() => UsersEntity, (e) => e.posts, { eager: true })
    author: UsersEntity;
}
