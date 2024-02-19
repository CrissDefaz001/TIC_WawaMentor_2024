import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'event_type' })
export class EventTypeEntity {
  @PrimaryGeneratedColumn()
  id_event_type: number;

  @Column({ length: 50 })
  event_type_name: string;
}
