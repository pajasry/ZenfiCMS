import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
