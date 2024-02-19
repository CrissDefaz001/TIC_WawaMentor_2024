import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'course_test' })
export class CourseTest {
  @PrimaryGeneratedColumn()
  id_course: number;

  @Column()
  course_name: string;

  @Column()
  course_desc: string;

  @Column()
  course_video_link: string;

  @Column()
  is_optional: boolean;

  @Column({ type: 'datetime' })
  start_date: Date;

  @Column()
  end_date: Date;
}
