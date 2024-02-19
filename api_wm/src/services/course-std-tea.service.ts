import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseStdTeaEntity } from '../entities/course-std-tea.entity';
import { Repository } from 'typeorm';
import { CreateCourseTSDto } from '../dto/create-course-t-s.dto';

@Injectable()
export class CourseStdTeaService {
  constructor(
    @InjectRepository(CourseStdTeaEntity)
    private _courseStdTeaRepository: Repository<CourseStdTeaEntity>,
  ) {}

  createCourseStdTea(courseST: CreateCourseTSDto) {
    const newCourseST = this._courseStdTeaRepository.create(courseST);
    return this._courseStdTeaRepository.save(newCourseST);
  }

  getCoursesST() {
    return this._courseStdTeaRepository.find();
  }

  getDataByIDCourse(id_user: number) {
    return this._courseStdTeaRepository.find({
      where: { id_user },
    });
  }
}
