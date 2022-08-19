import { Type } from "@nestjs/common";
import { Field, ObjectType } from "@nestjs/graphql";

interface ItemsOutputType<I> {
    items: I[];
    count: number;
}

interface ItemOutputType<I> {
    item?: I;
}

export const ItemsOutput = <I>(classRef: Type<I>): Type<ItemsOutputType<I>> => {
    @ObjectType({ isAbstract: true })
    abstract class Output implements ItemsOutputType<I> {
        @Field(() => [classRef])
        items: I[];

        @Field()
        count: number;
    }

    return Output as Type<ItemsOutputType<I>>;
};

export const ItemOutput = <I>(classRef: Type<I>): Type<ItemOutputType<I>> => {
    @ObjectType({ isAbstract: true })
    abstract class Output implements ItemOutputType<I> {
        @Field(() => classRef, { nullable: true })
        item?: I;
    }

    return Output as Type<ItemOutputType<I>>;
};
