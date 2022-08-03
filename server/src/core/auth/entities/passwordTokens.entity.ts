import { Field, GraphQLISODateTime, ObjectType } from "@nestjs/graphql";
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity("passwordTokens")
export class PasswordTokensEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    value: string;

    @Field()
    @Column({ default: false })
    isRevoked: boolean;

    @Field(() => GraphQLISODateTime)
    @CreateDateColumn()
    createdAt: string;

    @Field(() => GraphQLISODateTime)
    @UpdateDateColumn()
    updatedAt: string;
}
