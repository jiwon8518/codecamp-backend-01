import { BoardService } from './board.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => String) // 그래프큐엘은 대문자로
  //getHello(): string { // 타입스크립트 타입 소문자로
  getHello() {
    return this.boardService.getHello();
  }
}
