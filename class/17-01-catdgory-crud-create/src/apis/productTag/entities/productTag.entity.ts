import { Column, Entity, PrimaryGeneratedColumn, ManyToMany }  from 'typeorm';
import { Product } from 'src/apis/product/entites/product.entity'

@Entity()
export class ProductTag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Product, (products) => products.productTags)
    products: Product[];
}