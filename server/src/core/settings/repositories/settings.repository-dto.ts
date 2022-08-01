import { SettingsEntity } from "@/settings/entities/settings.entity";

export type CreateSettingsRepositoryDto = Pick<SettingsEntity, "googleAnalyticsId">;
