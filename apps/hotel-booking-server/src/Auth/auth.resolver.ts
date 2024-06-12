import * as graphql from "@nestjs/graphql";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}
}
