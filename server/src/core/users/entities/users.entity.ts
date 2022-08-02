import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Field, GraphQLISODateTime, ObjectType } from "@nestjs/graphql";
import { PostsEntity } from "@/posts/entities/posts.entity";
import { PagesEntity } from "@/pages/entities/pages.entity";
import { JwtTokensEntity } from "@/auth/entities/jwtTokens.entity";

@ObjectType()
@Entity("users")
export class UsersEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    username: string;

    @Field()
    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => JwtTokensEntity, { cascade: true, eager: true })
    @JoinColumn()
    jwtToken: JwtTokensEntity;

    @Field(() => GraphQLISODateTime)
    @CreateDateColumn()
    createdAt: string;

    @Field(() => GraphQLISODateTime)
    @UpdateDateColumn()
    updatedAt: string;

    @OneToMany(() => PagesEntity, (e) => e.author)
    pages: PagesEntity[];

    @OneToMany(() => PostsEntity, (e) => e.author)
    posts: PostsEntity[];
}
