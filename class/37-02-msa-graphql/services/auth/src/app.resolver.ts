import { Controller, Get } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Query(() => String)
  aaa() {
    return '임의로 아무거나 넣어준것임';
  }

  @Mutation(() => String)
  login() {
    return 'login 을 요청하였습니다';
  }
}
