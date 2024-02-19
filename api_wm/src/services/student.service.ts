import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from '../entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from '../dto/create-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private _studentRepository: Repository<StudentEntity>,
  ) {}

  createStudent(student: CreateStudentDto) {
    const newStudent = this._studentRepository.create(student);
    return this._studentRepository.save(newStudent);
  }

  getStudents() {
    return this._studentRepository.find();
  }
}
