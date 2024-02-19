import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'student' })
export class StudentEntity {
  @PrimaryColumn({ unique: true })
  id_user: number;

  @Column({ length: 60 })
  tutor_name: string;

  @Column({ length: 20 })
  tutor_phone: string;

  @Column({ length: 400, nullable: true })
  student_about_me: string;
}
