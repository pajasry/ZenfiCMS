import { Query, Resolver } from "@nestjs/graphql";
import { SettingsEntity } from "@/settings/entities/settings.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@/auth/guards/auth.guard";
import { SettingsRepository } from "@/settings/repositories/settings.repository";
import { SettingsOutput } from "@/settings/resolvers/settings.resolver-output";
import * as _ from "lodash";

@UseGuards(AuthGuard)
@Resolver(() => SettingsEntity)
export class SettingsResolver {
    constructor(private readonly settingsRepository: SettingsRepository) {}

    @Query(() => SettingsOutput)
    async settings(): Promise<SettingsOutput> {
        const settings = await this.settingsRepository.find();

        return { item: _.first(settings) };
    }
}
