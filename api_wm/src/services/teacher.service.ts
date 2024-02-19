import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherEntity } from '../entities/teacher.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from '../dto/create-teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(TeacherEntity)
    private _teacherRepository: Repository<TeacherEntity>,
  ) {}

  createTeacher(teacher: CreateTeacherDto) {
    const newTeacher = this._teacherRepository.create(teacher);
    return this._teacherRepository.save(newTeacher);
  }

  getTeachers() {
    return this._teacherRepository.find();
  }
}
