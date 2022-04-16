import { ProductSaleslocation } from 'src/apis/productSaleslocation/entities/productSaleslocation.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne }  from 'typeorm';
import { ProductCategory } from 'src/apis/productCategory/entities/productCategory.entity';
import { User } from 'src/apis/user/entities/user.entity';

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

    @JoinColumn() //One 일 경우 JoinColumn 무조건 사용해야함
    @OneToOne(() => ProductSaleslocation)
    productSaleslocation: ProductSaleslocation

    // @JoinColumn() many 일 경우 생략 가능
    @ManyToOne(() => ProductCategory)
    productCategory: ProductCategory;
    
    @ManyToOne(() => User)
    user: User;

}