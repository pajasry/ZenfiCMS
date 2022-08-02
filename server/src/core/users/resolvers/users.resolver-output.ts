import { ObjectType } from "@nestjs/graphql";
import { ItemOutput, ItemsOutput } from "@/helpers/outputs";
import { UsersEntity } from "@/users/entities/users.entity";

@ObjectType()
export class UsersOutput extends ItemsOutput(UsersEntity)<UsersEntity> {}

@ObjectType()
export class UserOutput extends ItemOutput(UsersEntity)<UsersEntity> {}
