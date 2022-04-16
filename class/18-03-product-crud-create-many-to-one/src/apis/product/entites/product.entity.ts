import { ProductSaleslocation } from 'src/apis/productSaleslocation/entities/productSaleslocation.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  DeleteDateColumn,
} from 'typeorm';
import { ProductCategory } from 'src/apis/productCategory/entities/productCategory.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { ProductTag } from 'src/apis/productTag/entities/productTag.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  // @Column({ type: 'text' })
  @Column({ type: 'text' })
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean; // true, false
  // soldedAt: Date // 비어있으면 아직 안팔림 (false), 차있으면 팔림(true) + 시간까지

  // 2. 소트프 삭제 - 1(직접구현)
  // @Column({ default: false }) // 삭제가 안되어있으니 false
  // @Field(() => Boolean)
  // isDeleted: boolean; // true, false

  // 3.소트프 삭제 - 2(직접구현)
  // @Column()
  // deletedAt: Date; // false(null), true(2022-01-01) 삭제된 시간까지 알수 있음

  // // 소프트 삭제(TypeORM 제공) - 1
  // @DeleteDateColumn()
  // deletedAt: Date; // false(null), true(2022-01-01) 삭제된 시간까지 알수 있음

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  @Field(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  @ManyToOne(() => ProductCategory, { cascade: true, onDelete: 'CASCADE' })
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => [ProductTag])
  productTags: ProductTag[];
}
