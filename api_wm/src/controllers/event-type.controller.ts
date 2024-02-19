import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventTypeService } from '../services/event-type.service';
import { EventTypeEntity } from '../entities/event-type.entity';
import { createEventTypeDto } from '../dto/event-type.dto';

@Controller('event_type')
export class EventTypeController {
  constructor(private _eventTypeService: EventTypeService) {}

  @Get()
  getEventTypes(): Promise<EventTypeEntity[]> {
    return this._eventTypeService.getEventType();
  }

  @Post()
  createEventType(
    @Body() newEventType: createEventTypeDto,
  ): Promise<EventTypeEntity> {
    // es asíncrono, así que debe haber un return
    return this._eventTypeService.createEventType(newEventType);
  }
}
