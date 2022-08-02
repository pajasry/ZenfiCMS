import { ObjectType } from "@nestjs/graphql";
import { SettingsEntity } from "@/settings/entities/settings.entity";
import { ItemOutput } from "@/helpers/outputs";

@ObjectType()
export class SettingsOutput extends ItemOutput(SettingsEntity)<SettingsEntity> {}
