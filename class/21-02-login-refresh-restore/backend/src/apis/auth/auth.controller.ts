import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user: Pick<User, 'email' | 'password' | 'name' | 'age'>;
}
@Controller()
export class AuthController {
  constructor(
    private readonly userService: UserService, //
    private readonly authService: AuthService,
  ) {}

  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    // 1.๊ฐ์ํ์ธ
    let user = await this.userService.findOne({ email: req.user.email });
    console.log('๐์๋ฌ user ' + user);

    // 2. ํ์๊ฐ์
    if (!user) {
      const { password, ...rest } = req.user;
      const createUser = { ...rest, hashedPassword: password }; // ์์์ด๋ผ์ hashedPassword ์๋ฌด๊ฑฐ๋ ํด๋ ๋จ

      user = await this.userService.create({ ...createUser });
    }

    // 3. ๋ก๊ทธ์ธ
    // 3-1. refreshToken ๋ง๋ค์ด์ ๋ฃ์ด์ฃผ๊ธฐ
    this.authService.setRefreshToken({ user, res });

    // 3-2. ํ๋ก ํธ์๋ ๋ก๊ทธ์ธ ๋ ํ์ด์ง๋ก ๋ฆฌ๋ค์ด๋ ํธ ์์ผ์ฃผ๊ธฐ(์ฟ ํค๋ฅผ ์ง์ด๋ฃ์ด์)
    res.redirect(
      'http://localhost:5500/class/21-02-login-refresh-restore/frontend/social-login.html',
    );
  }
}
