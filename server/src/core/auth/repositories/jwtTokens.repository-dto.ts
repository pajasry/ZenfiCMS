import { JwtTokensEntity } from "@/auth/entities/jwtTokens.entity";

export type CreateJwtTokenRepositoryDto = Pick<JwtTokensEntity, "value" | "isRevoked">;
