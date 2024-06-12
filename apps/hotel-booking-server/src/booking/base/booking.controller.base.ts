/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BookingService } from "../booking.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BookingCreateInput } from "./BookingCreateInput";
import { Booking } from "./Booking";
import { BookingFindManyArgs } from "./BookingFindManyArgs";
import { BookingWhereUniqueInput } from "./BookingWhereUniqueInput";
import { BookingUpdateInput } from "./BookingUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BookingControllerBase {
  constructor(
    protected readonly service: BookingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Booking })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBooking(
    @common.Body() data: BookingCreateInput
  ): Promise<Booking> {
    return await this.service.createBooking({
      data: {
        ...data,

        room: data.room
          ? {
              connect: data.room,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        endDate: true,
        id: true,

        room: {
          select: {
            id: true,
          },
        },

        startDate: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Booking] })
  @ApiNestedQuery(BookingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async bookings(@common.Req() request: Request): Promise<Booking[]> {
    const args = plainToClass(BookingFindManyArgs, request.query);
    return this.service.bookings({
      ...args,
      select: {
        createdAt: true,
        endDate: true,
        id: true,

        room: {
          select: {
            id: true,
          },
        },

        startDate: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async booking(
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<Booking | null> {
    const result = await this.service.booking({
      where: params,
      select: {
        createdAt: true,
        endDate: true,
        id: true,

        room: {
          select: {
            id: true,
          },
        },

        startDate: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBooking(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() data: BookingUpdateInput
  ): Promise<Booking | null> {
    try {
      return await this.service.updateBooking({
        where: params,
        data: {
          ...data,

          room: data.room
            ? {
                connect: data.room,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          endDate: true,
          id: true,

          room: {
            select: {
              id: true,
            },
          },

          startDate: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBooking(
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<Booking | null> {
    try {
      return await this.service.deleteBooking({
        where: params,
        select: {
          createdAt: true,
          endDate: true,
          id: true,

          room: {
            select: {
              id: true,
            },
          },

          startDate: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
