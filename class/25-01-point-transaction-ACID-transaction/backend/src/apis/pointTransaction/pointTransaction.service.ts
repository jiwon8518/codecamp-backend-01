import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entities/pointTransaction.entity';

@Injectable()
export class PointTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly userRepositroy: Repository<User>,

    private readonly connection: Connection,
  ) {}

  async create({ impUid, amount, currentUser }) {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect(); // 데이터베이스 연결
    await queryRunner.startTransaction();

    try {
      // 1. pointTransaction 테이블에 거래기록 생성
      const pointTransaction = await this.pointTransactionRepository.create({
        impUid: impUid,
        amount: amount,
        user: currentUser,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      });

      // await this.pointTransactionRepository.save(pointTransaction); // 23-01
      await queryRunner.manager.save(pointTransaction); //25-01
      // 실패했을때 확인(1) => 에러 만들어주기
      // throw new Error();

      // 2. 유저정보를 조회
      const user = await this.userRepositroy.findOne({ id: currentUser.id });

      // // 3. 유저의 돈 업데이트
      // await this.userRepositroy.update(
      //   { id: user.id }, // 조건 - 유저아이디
      //   { point: user.point + amount }, // 유저의 아이디+amount 해서 point 에 업데이트
      // ); // 23-01
      const updatedUser = this.userRepositroy.create({
        ...user,
        point: user.point + amount,
      });
      await queryRunner.manager.save(updatedUser);
      await queryRunner.commitTransaction();

      // 4.  최종 결과 돌려주기
      return pointTransaction;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      // 성공을 했든 못했든 상관없이 위 과정이 모두 끝나면 데이터 연결 종료 시켜야함
      // await queryRunner.release;
    }
  }
}
