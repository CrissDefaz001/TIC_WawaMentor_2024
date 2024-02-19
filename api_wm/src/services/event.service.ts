import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from '../entities/event.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from "../dto/update-event.dto";

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private _eventRepository: Repository<EventEntity>,
  ) {}

  createEvent(event: CreateEventDto) {
    const newEvent = this._eventRepository.create(event);
    return this._eventRepository.save(newEvent);
  }

  getEvents() {
    return this._eventRepository.find();
  }

  // Un solo evento
  getOneEvent(id_event: number) {
    return this._eventRepository.findOne({
      where: {
        id_event,
      },
    });
  }

  deleteEvent(id_event: number) {
    return this._eventRepository.delete({ id_event });
  }

  // Actualizar evento
  updateEvent(id_event: number, event: UpdateEventDto) {
    this._eventRepository.update({ id_event }, event);
  }
}
