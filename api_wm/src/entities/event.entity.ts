import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'event_wm' })
export class EventEntity {
  @PrimaryGeneratedColumn()
  id_event: number;

  @Column()
  id_event_type: number;

  @Column()
  id_course: number;

  @Column()
  id_user: number;

  @Column({ length: 100 })
  event_title: string;

  @Column()
  event_content: string;

  @Column({ type: 'datetime' })
  event_creation_date: Date;

  @Column({ type: 'datetime', nullable: true })
  event_submit_date: Date;

  @Column({ type: 'datetime' })
  event_deadline: Date;

  @Column()
  event_grade: number;
}
