import { Module } from "@nestjs/common";
import { LoginService } from "./login.service";
import { LoginController } from "./login.controller";
import { LoginResolver } from "./login.resolver";

@Module({
  controllers: [LoginController],
  providers: [LoginService, LoginResolver],
  exports: [LoginService],
})
export class LoginModule {}
