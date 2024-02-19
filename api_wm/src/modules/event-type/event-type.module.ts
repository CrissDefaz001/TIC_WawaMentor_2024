import { Module } from '@nestjs/common';
import { EventTypeController } from '../../controllers/event-type.controller';
import { EventTypeService } from '../../services/event-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventTypeEntity } from '../../entities/event-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventTypeEntity])],
  controllers: [EventTypeController],
  providers: [EventTypeService],
})
export class EventTypeModule {}
