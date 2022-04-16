import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entites/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private readonly producteService: ProductService) {}

  //list
  @Query(() => [Product])
  async fetchProducts() {
    return await this.producteService.findAll();
  }

  @Query(() => Product)
  async fetchProduct(@Args('productId') productId: string) {
    return await this.producteService.findOne({ productId });
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return await this.producteService.create({ createProductInput });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    await this.producteService.checkSoldout({ productId });
    return await this.producteService.update({ productId, updateProductInput });
  }
}
