import { Field, ObjectType } from "@nestjs/graphql";
import { Type } from "@nestjs/common";

export const ItemsOutput = <I>(ItemType: Type<I>) => {
    @ObjectType({ isAbstract: true })
    abstract class Output<I> {
        @Field(() => [ItemType])
        items: I[];

        @Field()
        count: number;
    }

    return Output;
};

export const ItemOutput = <I>(ItemType: Type<I>) => {
    @ObjectType({ isAbstract: true })
    abstract class Output<I> {
        @Field(() => ItemType, { nullable: true })
        item?: I;
    }

    return Output;
};
