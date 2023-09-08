import { Test, TestingModule } from '@nestjs/testing';
import { WorkController } from './work.controller';

describe('WorkController', () => {
  let controller: WorkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkController],
    }).compile();

    controller = module.get<WorkController>(WorkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
