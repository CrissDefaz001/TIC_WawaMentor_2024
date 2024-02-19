import { Module } from '@nestjs/common';
import { TeacherController } from '../../controllers/teacher.controller';
import { TeacherService } from '../../services/teacher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherEntity } from '../../entities/teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherEntity])],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
