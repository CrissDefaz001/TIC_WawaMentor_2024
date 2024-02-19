import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'user_wm' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ length: 30 })
  first_name: string;

  @Column({ length: 30 })
  last_name: string;

  @Column({ length: 100 })
  user_photo: string;
}
