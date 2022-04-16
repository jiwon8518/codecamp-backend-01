import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
  ) {}

  async create({ impUid, amount, currentUser }) {
    // 1. pointTransaction 테이블에 거래기록 생성
    const pointTransaction = await this.pointTransactionRepository.create({
      impUid: impUid,
      amount: amount,
      user: currentUser,
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
    });

    await this.pointTransactionRepository.save(pointTransaction);

    // 2. 유저정보를 조회
    const user = await this.userRepositroy.findOne({ id: currentUser.id });

    // 3. 유저의 돈 업데이트
    await this.userRepositroy.update(
      { id: user.id }, // 조건 - 유저아이디
      { point: user.point + amount }, // 유저의 아이디+amount 해서 point 에 업데이트
    );

    // 4.  최종 결과 돌려주기
    return pointTransaction;
  }
}
