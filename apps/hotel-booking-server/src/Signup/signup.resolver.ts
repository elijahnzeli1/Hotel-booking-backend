import * as graphql from "@nestjs/graphql";
import { SignupService } from "./signup.service";

export class SignupResolver {
  constructor(protected readonly service: SignupService) {}
}
