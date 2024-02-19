import { Test, TestingModule } from '@nestjs/testing';
import { CourseStdTeaController } from '../course-std-tea.controller';

describe('CourseStdTeaController', () => {
  let controller: CourseStdTeaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseStdTeaController],
    }).compile();

    controller = module.get<CourseStdTeaController>(CourseStdTeaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
