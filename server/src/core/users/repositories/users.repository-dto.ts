import { UsersEntity } from "@/users/entities/users.entity";

export type CreateUserRepositoryDto = Pick<
    UsersEntity,
    "firstName" | "lastName" | "email" | "password"
>;
