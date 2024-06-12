import { Module } from "@nestjs/common";
import { SignupService } from "./signup.service";
import { SignupController } from "./signup.controller";
import { SignupResolver } from "./signup.resolver";

@Module({
  controllers: [SignupController],
  providers: [SignupService, SignupResolver],
  exports: [SignupService],
})
export class SignupModule {}
