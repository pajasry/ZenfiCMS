import { ArgsType, Field } from "@nestjs/graphql";

import { PaginationArgs } from "@/helpers";

@ArgsType()
export class PagesArgs extends PaginationArgs {
    @Field({ nullable: true })
    parentId?: string | null;

    @Field({ nullable: true })
    isHomepage?: boolean;

    @Field({ nullable: true })
    except?: string;

    @Field({ nullable: true })
    hasSubpages?: boolean;
}
