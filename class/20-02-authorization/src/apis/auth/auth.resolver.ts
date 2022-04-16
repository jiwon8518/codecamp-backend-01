import {
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService, //모듈에 추가해야 사용가능
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => String)
  async login(
    @Args('email') email: string, //
    @Args('password') password: string, // 입력된 비밀번호
  ) {
    // 로그인
    // 1. 이메일과 비밀번호가 맞는 유저 찾기
    const user = await this.userService.findOne({ email });
    if (!user) {
      throw new UnprocessableEntityException('이메일이 없습니다');
    }
    const isAuthenticated = await bcrypt.compare(password, user.password); //compare 비교 하겠다, user.password -> 해시된 비밀번호
    if (!isAuthenticated) {
      throw new UnauthorizedException('비밀번호가 틀렸습니다');
    }

    // 2.  acessToken(JWT)을 만들어서 프론트엔드에 보내주기
    return this.authService.getAccessToken({ user });
  }
}
