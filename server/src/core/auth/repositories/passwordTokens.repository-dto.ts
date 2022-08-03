import { PasswordTokensEntity } from "@/auth/entities/passwordTokens.entity";

export type CreatePasswordTokenRepositoryDto = Pick<
    PasswordTokensEntity,
    "value" | "isRevoked" | "createdAt" | "updatedAt"
>;
