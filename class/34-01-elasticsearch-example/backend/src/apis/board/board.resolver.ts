import { BoardService } from './board.service';
import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Board } from './entities/board.entity';
// import { writer } from 'repl';
import { CreateBoardInput } from './dto/createBoard.input';
import { Cache } from 'cache-manager';
import { Inject, CACHE_MANAGER } from '@nestjs/common';

@Resolver()
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  @Query(() => [Board]) // 그래프큐엘은 대문자로
  fatchBoards(): Board[] {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  async createBoard(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ): Promise<string> {
    //============= 캐시에 등록하고 조회하는 연습해보기 ===============//
    // const mycache = await this.cacheManager.get(`board:${writer}`);
    // console.log(mycache);
    // await this.cacheManager.set(`board:${writer}`, createBoardInput, {ttl:0});
    // return '캐시 성공!!';
    //==================================================================//+
    // 레디스 연습을 위해서 주석걸기!!
    return this.boardService.create({
      writer,
      title,
      contents,
      createBoardInput,
    });
  }
}
