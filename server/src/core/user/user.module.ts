import { Module } from "@nestjs/common";

import { AuthModule } from "@/auth/auth.module";
import { UserResolver } from "@/user/resolvers/user.resolver";
import { UserService } from "@/user/services/user.service";

@Module({
    imports: [AuthModule],
    exports: [UserResolver, UserService],
    providers: [UserResolver, UserService],
})
export class UserModule {}
