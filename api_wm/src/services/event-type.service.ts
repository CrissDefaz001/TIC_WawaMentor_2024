import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventTypeEntity } from '../entities/event-type.entity';
import { createEventTypeDto } from '../dto/event-type.dto';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectRepository(EventTypeEntity)
    private _eventTypeRepository: Repository<EventTypeEntity>,
  ) {}

  createEventType(eventType: createEventTypeDto) {
    const newEventType = this._eventTypeRepository.create(eventType);
    return this._eventTypeRepository.save(newEventType);
  }

  getEventType() {
    return this._eventTypeRepository.find();
  }
}
