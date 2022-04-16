import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
  ) {}

  async findAll() {
    return await this.productRepository.find();
  }
  async findOne({ productId }: IFindOne) {
    //async findOne({productId}: {productId: string}) { // 다시 체크 필기
    return await this.productRepository.findOne({ id: productId });
  }
  // async findOne({ productId }: IFindOne) {
  //   //async findOne({productId}: {productId: string}) { // 다시 체크 필기
  //   return await this.productRepository.findOne({
  //     id: productId,
  //     where: { new Date(): null }, //  null 인 애들만 가져오기
  //   });
  // }

  async create({ createProductInput }: ICreate) {
    try {
      //product 에 안담고 그냥 return 해도 됨
      //const product = await this.productRepository.save({
      return await this.productRepository.save({
        // 방법1 - 스프레드연산자 사용하기
        ...createProductInput,
        // 방법2 - 하나하나 직접 나열하기
        // name: createProductInput.name,
        // description: createProductInput.description,
        // price: createProductInput.price,
        // isSoldeout: false, //product.entity.ts 의 Column({ default: false })넣어줘서 생략함
      });
      //return product;
    } catch (error) {
      //console.log(error);
      throw error;
    }
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
    // // 1. - 진짜 삭제했을때(직접구현)
    // const result = await this.productRepository.delete({ id: productId });
    // // affected - 정상적으로 삭제가 되었는지 안됐는지 알려줌
    // return result.affected ? true : false;
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
    //  5.소프트 삭제(TypeORM 제공) - 2
    const result = await this.productRepository.softDelete({ id: productId }); // 다양한 조건으로 삭제 가능
    return result.affected ? true : false;
  }
}
