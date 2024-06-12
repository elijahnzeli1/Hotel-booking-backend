import * as graphql from "@nestjs/graphql";
import { LoginService } from "./login.service";

export class LoginResolver {
  constructor(protected readonly service: LoginService) {}
}
