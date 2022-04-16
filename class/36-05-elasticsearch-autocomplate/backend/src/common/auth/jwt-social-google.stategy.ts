import { Strategy, Profile } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  // constructor - 생성자
  //토큰, ... 체크를 다했다
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENTID, //클라이언트 ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, //클라이언트 보안 비밀
      callbackURL: process.env.GOOGLE_CALLBACK_URL, //추가한 리디렉션 URI
      scope: ['email', 'profile'], //스코프는 받아올 유저 정보
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    // 구글에서 제공하지만 우리는 사용하지 않을것임 accessToken, refreshToken 는 사용안함
    // console.log();

    // profile.displayName
    // profile.emails[0].value
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);

    return {
      email: profile.emails[0].value,
      password: profile.id,
      name: profile.displayName,
      age: 0,
    };
  }
}
