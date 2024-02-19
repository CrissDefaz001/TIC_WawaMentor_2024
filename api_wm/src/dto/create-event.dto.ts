export class CreateEventDto {
  id_event: number;
  id_event_type: number;
  id_course: number;
  id_user: number;
  event_title: string;
  event_content: string;
  event_creation_date: Date;
  event_submit_date: Date;
  event_deadline: Date;
  event_grade: number;
}
