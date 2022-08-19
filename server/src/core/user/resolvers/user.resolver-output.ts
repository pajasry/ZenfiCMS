import { ObjectType } from "@nestjs/graphql";

import { ItemOutput, ItemsOutput } from "@/helpers";
import { UserEntity } from "@/user/entities/user.entity";

@ObjectType()
export class UsersOutput extends ItemsOutput(UserEntity) {}

@ObjectType()
export class UserOutput extends ItemOutput(UserEntity) {}
