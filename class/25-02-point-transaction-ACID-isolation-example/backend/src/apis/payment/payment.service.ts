import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    private readonly connection: Connection,
  ) {}

  async findAll() {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('READ COMMITTED');
    try {
      setInterval(async () => {
        const payment = await queryRunner.manager.find(Payment); //어느 테이블을 파인드할것인지
        console.log(payment);
      }, 1000);
      //   await queryRunner.commitTransaction();
      //   return payment;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    }
  }

  async create({ amount }) {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('READ COMMITTED');
    try {
      const payment = await this.paymentRepository.create({ amount });
      await queryRunner.manager.save(payment);
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    }
    // finally {
    //   await queryRunner.release();
    // }
  }
}
