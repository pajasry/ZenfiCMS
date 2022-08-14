import { AbstractRepository, EntityRepository } from "typeorm";
import { PasswordTokensEntity } from "@/auth/entities/passwordTokens.entity";
import { CreatePasswordTokenRepositoryDto } from "@/auth/repositories/passwordTokens.repository-dto";

@EntityRepository(PasswordTokensEntity)
export class PasswordTokensRepository extends AbstractRepository<PasswordTokensEntity> {
    create(
        createPasswordTokenRepositoryDto: Partial<CreatePasswordTokenRepositoryDto>
    ): PasswordTokensEntity {
        return this.repository.create(createPasswordTokenRepositoryDto);
    }
}
