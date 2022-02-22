import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  // constructor - 생성자
  //토큰, ... 체크를 다했다
  constructor() {
    super({
      jwtFromRequest: (req) => {
        // console.log(req.headers.cookies);
        const cookies = req.headers.cookies;

        return cookies.replace('refreshToken=', '');
      },
      secretOrKey: process.env.REFRESH_TOKEN_KEY,
    });
  }

  validate(payload) {
    return {
      id: payload.sub,
      email: payload.email,
    };
  }
}
