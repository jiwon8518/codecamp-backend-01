import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Float } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class ProductSaleslocation {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  address: string;

  @Column()
  @Field(() => String)
  addressDetail: string;

  @Column()
  @Field(() => Float)
  lat: number;

  @Column()
  @Field(() => Float)
  lng: number;

  @Column({ type: 'timestamp' })
  @Field(() => Date)
  meetingTime: Date;

  // soldedAt: Date // 비어있으면 아직 안팔림 (false), 차있으면 팔림(true) + 시간까지
}
