import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}
  async create({ name }) {
    // 카테고리를 데이터베이스에 저장
    await this.productCategoryRepository.save({ name }); // save 등록하고 가지고 오기, create 등록하기, name: name 생략가능
  }
}
