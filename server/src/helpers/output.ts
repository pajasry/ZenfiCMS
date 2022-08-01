import { Field, ObjectType } from "@nestjs/graphql";
import { Type } from "@nestjs/common";

//TODO: Replace any with type

export const ItemsOutput = <I>(ItemType: Type<I>): any => {
    @ObjectType({ isAbstract: true })
    abstract class Output<I> {
        @Field(() => [ItemType])
        items: I[];

        @Field()
        count: number;
    }

    return Output;
};

export const ItemOutput = <I>(ItemType: Type<I>): any => {
    @ObjectType({ isAbstract: true })
    abstract class Output<I> {
        @Field(() => ItemType)
        item: I;
    }

    return Output;
};
