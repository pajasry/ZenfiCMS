import { ObjectType } from "@nestjs/graphql";
import { ItemOutput, ItemsOutput } from "@/helpers/output";
import { UsersEntity } from "@/users/entities/users.entity";

@ObjectType()
export class UsersOutput extends ItemsOutput(UsersEntity) {}

@ObjectType()
export class UserOutput extends ItemOutput(UsersEntity) {}
