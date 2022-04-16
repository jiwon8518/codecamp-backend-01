import { Injectable } from '@nestjs/common';
import { Board } from './entities/board.entity';

@Injectable() // Injectable 의존성주입 @데코레이터
export class BoardService {
  findAll(): Board[] {
    // 데이터 조회하는 로직

    return [
      {
        number: 1,
        writer: '둘리',
        title: '제목입니다',
        contents: '내용입니다~',
      },
      {
        number: 2,
        writer: '또치',
        title: '제목입니다',
        contents: '내용입니다~',
      },
      {
        number: 3,
        writer: '마이콜',
        title: '제목입니다',
        contents: '내용입니다~',
      },
    ];
  }

  create(args): string {
    // 데이터 등록하는 로직
    console.log(args);

    return '등록에 성공하였습니다.';
  }
}
