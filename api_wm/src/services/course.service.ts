import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseTest } from '../entities/course.entity';
import { createCourseDto } from '../dto/create-Course.dto';

@Injectable()
export class CourseService {
  // importa la clase Curso y lo convierte en repositorio
  constructor(
    @InjectRepository(CourseTest)
    private courseRepository: Repository<CourseTest>,
  ) {}

  // Crear cursos
  createCourse(course: createCourseDto) {
    const newCourse = this.courseRepository.create(course);
    return this.courseRepository.save(newCourse);
  }

  // Listar cursos
  getCourses() {
    return this.courseRepository.find();
  }

  // Buscar curso por usuario
  getCourseByID(id_course: number) {
    return this.courseRepository.findOne({
      where: { id_course },
    });
  }
}
