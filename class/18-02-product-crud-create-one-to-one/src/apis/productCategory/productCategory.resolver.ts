import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';

@Resolver()
export class ProductCategoryResolver {
  constructor(
    private readonly producteCategoryService: ProductCategoryService,
  ) {}
  @Mutation(() => ProductCategory)
  async createProductCategory(
    @Args('name') name: string, //
  ) {
    return await this.producteCategoryService.create({ name });
  }
}
