import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeacherService } from '../services/teacher.service';
import { TeacherEntity } from '../entities/teacher.entity';
import { CreateTeacherDto } from '../dto/create-teacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private _teacherService: TeacherService) {}

  @Get()
  getTeachers(): Promise<TeacherEntity[]> {
    return this._teacherService.getTeachers();
  }

  @Post()
  createTeacher(@Body() newTeacher: CreateTeacherDto) {
    return this._teacherService.createTeacher(newTeacher);
  }
}
