import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { PostsEntity } from "@/posts/entities/posts.entity";
import { PagesEntity } from "@/pages/entities/pages.entity";

@ObjectType()
@Entity("users")
export class UsersEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    firstName?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    lastName?: string;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    password: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    refreshToken?: string;

    @Field()
    @CreateDateColumn()
    createdAt: string;

    @Field()
    @UpdateDateColumn()
    updatedAt: string;

    @Field(() => [PagesEntity])
    @OneToMany(() => PagesEntity, (e) => e.author)
    pages: PagesEntity[];

    @Field(() => [PostsEntity])
    @OneToMany(() => PostsEntity, (e) => e.author)
    posts: PostsEntity[];
}
