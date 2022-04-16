import { InputType, OmitType } from '@nestjs/graphql';
import { ProductSaleslocation } from '../entities/productSaleslocation.entity';
// entity 파일에서
// PickType - entity 파일에서 가져와서 원하는것만 픽함
// OmitType - 나한테 불필요한애를 빼준다

@InputType()
export class ProductSaleslocationInput extends OmitType(
  ProductSaleslocation,
  ['id'], // id 만 빼고 (배열이기 떄문에 여러개 선택 가능)
  InputType, // 나머지들만 InputType 으로 만들어줘
) {
  //@field(()=> String)
  // adderss: string
  // ...
  // => 이것처험 모두 적어야 하지만, PickType  또는, OmitType 등을 활용하여 타입을 재사용
}
