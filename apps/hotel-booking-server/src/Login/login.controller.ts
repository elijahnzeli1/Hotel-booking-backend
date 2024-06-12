import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LoginService } from "./login.service";

@swagger.ApiTags("logins")
@common.Controller("logins")
export class LoginController {
  constructor(protected readonly service: LoginService) {}
}
