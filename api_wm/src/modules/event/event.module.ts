import { Module } from '@nestjs/common';
import { EventController } from '../../controllers/event.controller';
import { EventService } from '../../services/event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from '../../entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
