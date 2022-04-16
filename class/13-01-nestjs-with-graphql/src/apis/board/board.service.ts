import { Injectable } from '@nestjs/common';

@Injectable() // Injectable 의존성주입 @데코레이터
export class BoardService {
  getHello(): string {
    return 'Hello World!';
  }
}
