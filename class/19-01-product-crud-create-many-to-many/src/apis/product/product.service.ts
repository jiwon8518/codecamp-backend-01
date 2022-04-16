import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from '../productCategory/entities/productCategory.entity';
import { ProductSaleslocation } from '../productSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from '../productTag/entities/productTag.entity';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entites/product.entity';

interface IFindOne {
  productId: string;
}
interface ICreate {
  createProductInput: CreateProductInput;
}
interface IUpdate {
  productId: string;
  updateProductInput: UpdateProductInput;
}

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,

    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ) {}

  async findAll() {
    return await this.productRepository.find({
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }
  async findOne({ productId }: IFindOne) {
    //async findOne({productId}: {productId: string}) { // 다시 체크 필기
    return await this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  async create({ createProductInput }: ICreate) {
    // // 상품만 등록하는 경우
    //   return await this.productRepository.save({
    //     ...createProductInput, // 방법1 - 스프레드연산자 사용하기
    //     // 방법2 - 하나하나 직접 나열하기
    //     // name: createProductInput.name,
    //     // description: createProductInput.description,
    //     // price: createProductInput.price,
    //     // isSoldeout: false, //product.entity.ts 의 Column({ default: false })넣어줘서 생략함
    //   });
    //
    // 2. 상품과 상품거래위치 테이블을 연결하여 등록하기
    console.log(createProductInput);

    // 2-1. 하나하나 분해하기
    // const product = {
    //   name: createProductInput.name,
    //   description: createProductInput.description,
    //   price: createProductInput.price,
    // };

    // const productSaleslocation = createProductInput.productSaleslocation;

    //2-2. 한번에 분해하기
    const { productSaleslocation, productCategoryId, prodcutTags, ...product } =
      createProductInput;

    const result1 = await this.productSaleslocationRepository.save({
      ...productSaleslocation,
    });
    const result2 = await this.productCategoryRepository.findOne({
      id: productCategoryId,
    });

    //prodcutTags; //["#전자제품", "#영등포", "#컴퓨터"]

    const result3 = [];
    // 추후 for문을 map 과 Promise.all 로 최적화 할 것
    for (let i = 0; i < prodcutTags.length; i++) {
      const tagname = prodcutTags[0].replace('#', '');

      const prevTag = await this.productRepository.findOne({ name: tagname });
      // 기존에 태그가 존재한다면
      if (prevTag) {
        result3.push(prevTag);
        //
        // 기존에 태그가 없었다면
      } else {
        const newTag = await this.productTagRepository.save({ name: tagname });
        result3.push(newTag);
      }
    }
    // 다시 필기
    // result1, result2 필기
    // 방금 등록한 productTag 포함시켜서 product 등록!!
    return await this.productRepository.save({
      ...product,
      productSaleslocation: result1,
      // productCategory: { id: productCategoryId },
      productCategory: result2,
      productTags: result3,
    });
  }

  async update({ productId, updateProductInput }: IUpdate) {
    const product = await this.productRepository.findOne({ id: productId });
    const newProduct = {
      ...product,
      //방법1
      ...updateProductInput,
      //방법2
      // name: updateProductInput.name,
      // description: updateProductInput.description,
      // price: updateProductInput.price,
    };
    //this.productRepository.update({ id: productId }, { ...updateProductInput }); // L-조건 R-
    return await this.productRepository.save(newProduct); // L-조건 R-
    // save 를 하면 수정도 되고 객체반환도 되서 확인할수 있음
    //return '수정이 완료 되었습니다';
  }

  async checkSoldout({ productId }) {
    const product = await this.productRepository.findOne({ id: productId });
    if (product.isSoldout)
      // 방법2
      throw new UnprocessableEntityException('이미 판매완료된 상품입니다');

    // 방법1
    // throw new HttpException(
    // '이미 판매완료된 상품입니다',
    // HttpStatus.UNPROCESSABLE_ENTITY,
    // ); // 에러메세지를 전달 프론트로
  }

  async delete({ productId }) {
    // 1. - 진짜 삭제했을때(직접구현)
    const result = await this.productRepository.delete({ id: productId });
    // affected - 정상적으로 삭제가 되었는지 안됐는지 알려줌
    return result.affected ? true : false;
    //
    // // 2. 소트프 삭제 - 1(직접구현)
    // await this.productRepository.update({ id: productId }, { isDeleted: true });
    //
    // 3. 소트프 삭제 - 2(직접구현)
    // await this.productRepository.update(
    //   { id: productId },
    //   { deletedAt: new Date() }, // 현재 삭제된 시간이 들어감 new Date()
    // );
    //
    // 4. 소프트 삭제(TypeORM 제공) - 1
    // await this. productRepository.softRemove({ id: productId}); // id로만 삭제가능
    //
    // //  5.소프트 삭제(TypeORM 제공) - 2
    // const result = await this.productRepository.softDelete({ id: productId }); // 다양한 조건으로 삭제 가능
    // return result.affected ? true : false;
  }
}
