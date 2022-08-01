import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SettingsRepository } from "@/settings/repositories/settings.repository";
import { SettingsResolver } from "@/settings/resolvers/settings.resolver";
import { SettingsService } from "@/settings/services/settings.service";

@Module({
    imports: [TypeOrmModule.forFeature([SettingsRepository])],
    providers: [SettingsResolver, SettingsService],
    exports: [SettingsResolver, SettingsService],
})
export class SettingsModule {}
