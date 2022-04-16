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

  // findOne
  async findOne({ email }) {
    return await this.userRepository.findOne({ email });
  }

  // create
  async create({ email, hashedPassword: password, name, age }) {
    //async create({ email, hashedPassword, name, age }) {
    // 에러메세지 응용해서 넣어보기
    // HttpException, ConflictException 사용
    const user = await this.userRepository.findOne({ email });
    if (user) throw new ConflictException('이미 등록된 이메일 입니다.');

    //const password = hashedPassword;
    return await this.userRepository.save({ email, password, name, age });
    //   return await this.userRepository.save({
    //     email, // key:values 값으면 생략 가능
    //     password: hashedPassword,
    //     name,
    //     age,
    //   });
  }
}
