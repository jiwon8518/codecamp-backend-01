import { Column, Entity, PrimaryGeneratedColumn }  from 'typeorm';

@Entity()
export class ProductSaleslocation {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    address: string
    
    @Column()
    addressDetail: string
    
    @Column()
    lat: number
    
    @Column()
    lng: number
    
    @Column({ type: 'timestamp' })
    meetingTime: Date

    // soldedAt: Date // 비어있으면 아직 안팔림 (false), 차있으면 팔림(true) + 시간까지
}