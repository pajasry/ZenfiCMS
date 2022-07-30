import { PagesEntity } from "@/pages/entities/pages.entity";

export type CreatePagesRepositoryDto = Pick<
    PagesEntity,
    "name" | "author" | "status" | "description"
>;
