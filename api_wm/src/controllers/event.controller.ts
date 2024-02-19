import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EventService } from '../services/event.service';
import { EventEntity } from '../entities/event.entity';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

@Controller('event')
export class EventController {
  constructor(private _eventService: EventService) {}

  @Get()
  getEvents(): Promise<EventEntity[]> {
    return this._eventService.getEvents();
  }

  // Un solo evento
  @Get('id_event')
  getOneEvent(
    @Param('id_event', ParseIntPipe) id_event: number,
  ): Promise<EventEntity> {
    return this._eventService.getOneEvent(id_event);
  }

  @Post()
  createEvent(@Body() newEvent: CreateEventDto) {
    return this._eventService.createEvent(newEvent);
  }

  @Delete(':id')
  deleteEvent(@Param('id', ParseIntPipe) id: number) {
    return this._eventService.deleteEvent(id);
  }

  // Actualizar
  @Patch(':id')
  updateEvent(
    @Param('id', ParseIntPipe) id: number,
    @Body() event: UpdateEventDto,
  ) {
    return this._eventService.updateEvent(id, event);
  }
}
