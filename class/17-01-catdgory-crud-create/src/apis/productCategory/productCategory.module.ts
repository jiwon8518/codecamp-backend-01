import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryResolver } from './productCategory.resolver';
import { ProductCategoryService } from './productCategory.service';

@Module({
  import: [TypeOrmModule.forFeature([ProductCategory])],
  providers: [
    ProductCategoryResolver, //
    ProductCategoryService,
  ],
})
export class ProductCategory {}
