import { AbstractRepository, EntityRepository } from "typeorm";
import { JwtTokensEntity } from "@/auth/entities/jwtTokens.entity";
import { CreateJwtTokenRepositoryDto } from "@/auth/repositories/jwtTokens.repository-dto";

@EntityRepository(JwtTokensEntity)
export class JwtTokensRepository extends AbstractRepository<JwtTokensEntity> {
    create(createJwtTokenRepositoryDto: Partial<CreateJwtTokenRepositoryDto>): JwtTokensEntity {
        return this.repository.create(createJwtTokenRepositoryDto);
    }
}
