import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';
@Entity()
@ObjectType()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;
}
