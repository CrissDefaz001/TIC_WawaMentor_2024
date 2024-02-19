import { Test, TestingModule } from '@nestjs/testing';
import { CourseStdTeaService } from '../course-std-tea.service';

describe('CourseStdTeaService', () => {
  let service: CourseStdTeaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseStdTeaService],
    }).compile();

    service = module.get<CourseStdTeaService>(CourseStdTeaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
