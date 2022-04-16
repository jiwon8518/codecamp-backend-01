import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entites/product.entity';
import { ProductService } from './product.service';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly producteService: ProductService, //
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  //list
  @Query(() => [Product])
  async fetchProducts() {
    // 엘라스틱 서치에서 조회하기 연습!!
    const result = await this.elasticsearchService.search({
      index: 'myproduct',
      query: {
        match_all: {},
      },
    });
    console.log(JSON.stringify(result, null, ' '));

    //
    // 엘라스틱서치에서 조회해보기 위해 임시로 주석!!
    // return await this.producteService.findAll();
  }

  @Query(() => Product)
  async fetchProduct(@Args('productId') productId: string) {
    return await this.producteService.findOne({ productId });
  }

  // create
  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    // 엘라스틱 서치에서 등록하기 연습!! => 연습일뿐, 실제로는 MySQL에 저장할 예정!!
    this.elasticsearchService.create({
      id: 'myid',
      index: 'myproduct',
      document: {
        ...createProductInput,
      },
    });
    //
    // 엘라스틱서치에서 등록해보기 위해서 임시로 주석!!
    // return await this.producteService.create({ createProductInput });
  }

  // update
  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    await this.producteService.checkSoldout({ productId });
    return await this.producteService.update({ productId, updateProductInput });
  }

  // delete
  @Mutation(() => Boolean)
  async deleteProduct(@Args('productId') productId: string) {
    return await this.producteService.delete({ productId });
  }
}
