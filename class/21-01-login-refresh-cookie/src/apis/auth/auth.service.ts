import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
  ) {}

  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user.id },
      { secret: 'myRefreshKey', expiresIn: '2w' },
    );

    // 개발환경
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}`);

    // // 배포환경 - 일단 주석처리. 배포할때 해보자
    // res.setHeader('Access-Control-Allow-Origin', 'https://myfrontssite.com');
    // res.setHeader(
    //   'Set-Cookie', //
    //   `refreshToken=${refreshToken}; path=/; domain=mybacksite.com; SameSite=None; Secure; httpOnly;`,
    // );
  }

  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user.id }, //
      { secret: 'myAccessKey', expiresIn: '1h' }, // 암호화할 키,만료 옵션
    );
  }
}
