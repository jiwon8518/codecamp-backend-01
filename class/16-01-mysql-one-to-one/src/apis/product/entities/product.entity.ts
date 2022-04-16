import { ProductSaleslocation } from 'src/apis/productSaleslocation/entities/productSaleslocation.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne }  from 'typeorm';

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

}