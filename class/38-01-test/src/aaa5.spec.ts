import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

class MockAppService {
  getHello() {
    return 'Hello World!';
  }
}

describe('AppController', () => {
  // let appService: AppService; // 초기값 안주고 타입만
  let appController: AppController;

  beforeEach(async () => {
    const appModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useClass: MockAppService, // 나만의 AppService 주입하기
        },
      ], // 실제 AppSerivce 안주고, 나만의 AppService 만들어서 주기
    }).compile();

    // appService = appModule.get<AppService>(AppService);
    appController = appModule.get<AppController>(AppController);
  });

  describe('getHello', () => {
    it('이 테스트의 결과는 Hello World 리턴해야됨!!!', () => {
      const result = appController.getHello();
      expect(result).toBe('Hello World!');
    });
  });
});
