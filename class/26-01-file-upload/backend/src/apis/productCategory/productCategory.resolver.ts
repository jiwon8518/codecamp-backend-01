import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';

@Resolver()
export class ProductCategoryResolver {
  constructor(
    private readonly producteCategoryService: ProductCategoryService,
  ) {}

  // create
  @Mutation(() => ProductCategory)
  async createProductCategory(
    @Args('name') name: string, //
  ) {
    return await this.producteCategoryService.create({ name });
  }

  // delete
  @Mutation(() => Boolean)
  async deleteProductCategory(
    @Args('productCategoryId') productCategoryId: string, // Args 으로 받아오기
  ) {
    return await this.producteCategoryService.delete({ productCategoryId });
  }
}
