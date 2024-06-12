import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SignupService } from "./signup.service";

@swagger.ApiTags("signups")
@common.Controller("signups")
export class SignupController {
  constructor(protected readonly service: SignupService) {}
}
