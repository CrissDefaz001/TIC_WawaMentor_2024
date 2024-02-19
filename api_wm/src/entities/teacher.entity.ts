import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'teacher' })
export class TeacherEntity {
  @PrimaryColumn({ unique: true })
  id_user: number;

  @Column({ length: 50 })
  teacher_role: string;

  @Column({ length: 400, nullable: true })
  teacher_about_me: string;

  @Column({ length: 100, nullable: true })
  teacher_wsp: string;

  @Column({ length: 100, nullable: true })
  teacher_fb: string;

  @Column({ length: 100, nullable: true })
  teacher_ig: string;
}
