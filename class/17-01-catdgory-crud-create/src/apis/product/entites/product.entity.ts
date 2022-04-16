import { ProductSaleslocation } from 'src/apis/productSaleslocation/entities/productSaleslocation.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable }  from 'typeorm';
import { ProductCategory } from 'src/apis/productCategory/entities/productCategory.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { ProductTag } from 'src/apis/productTag/entities/productTag.entity';

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string

    // @Column({ type: 'text' })
    @Column({ type: 'text' })
    name: string
    
    @Column()
    description: string
    
    @Column()
    price: number
    
    @Column()
    isSoldout: boolean // true, false

    // soldedAt: Date // 비어있으면 아직 안팔림 (false), 차있으면 팔림(true) + 시간까지

    @JoinColumn()
    @OneToOne(() => ProductSaleslocation)
    productSaleslocation: ProductSaleslocation

    @ManyToOne(() => ProductCategory)
    productCategory: ProductCategory;
    
    @ManyToOne(() => User)
    user: User;

    @JoinTable()
    @ManyToMany(() => ProductTag, (productTags) => productTags.products)
    productTags: ProductTag[];
}