import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { StudentEntity } from '../entities/student.entity';
import { CreateStudentDto } from '../dto/create-student.dto';

@Controller('student')
export class StudentController {
  constructor(private _studentService: StudentService) {}

  @Get()
  getStudents(): Promise<StudentEntity[]> {
    return this._studentService.getStudents();
  }

  @Post()
  createStudent(@Body() newStudent: CreateStudentDto) {
    return this._studentService.createStudent(newStudent);
  }
}
