import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { PointTransaction } from './entities/pointTransaction.entity';
import { PointTransactionResolver } from './pointTransaction.resolver';
import { PointTransactionService } from './pointTransaction.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PointTransaction, // Repository
      User,
    ]),
  ],
  providers: [
    // 리졸버 서비스 등록
    PointTransactionResolver,
    PointTransactionService,
  ],
})
export class PointTransactionModule {}
