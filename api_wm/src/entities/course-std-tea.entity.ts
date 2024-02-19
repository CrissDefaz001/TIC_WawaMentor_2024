import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'course_student' })
export class CourseStdTeaEntity {
  @PrimaryColumn()
  id_user: number;

  @PrimaryColumn()
  id_course: number;

  @PrimaryColumn()
  t_id_user: number;

  @Column()
  course_level: string;
}
