import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // create
  async create({ email, password, name, age }) {
    // 에러메세지 응용해서 넣어보기
    // HttpException, ConflictException 사용
    const user = await this.userRepository.findOne({ email });
    if (user) throw new ConflictException('이미 등록된 이메일 입니다.');

    return await this.userRepository.save({ email, password, name, age });
  }
}
