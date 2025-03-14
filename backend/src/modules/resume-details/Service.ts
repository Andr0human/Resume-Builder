import { Types } from 'mongoose';
import { IResume } from './entities';
import ResumeRepository from './repositories/Repository';

class ResumeService {
  resumeRepository: ResumeRepository;

  constructor() {
    this.resumeRepository = new ResumeRepository();
  }

  getById = async (resumeId: string, fields: string): Promise<IResume | null> => {
    const result: IResume | null = await this.resumeRepository.getById(resumeId, fields);
    return result;
  };

  getAll = async (userId: string, fields: string): Promise<IResume[] | null> => {
    const result: IResume[] | null = await this.resumeRepository.getAll(userId, fields);
    return result;
  };

  updateById = async (resumeId: string, newData: IResume): Promise<IResume | null> => {
    const result: IResume | null = await this.resumeRepository.update(resumeId, newData);
    return result;
  };

  create = async (resume: IResume, userId: string): Promise<IResume> => {
    const result: IResume = await this.resumeRepository.create({
      ...resume,
      createdBy: new Types.ObjectId(userId as string),
    });
    return result;
  };

  deleteById = async (resumeId: string): Promise<void> => {
    await this.resumeRepository.deleteById(resumeId);
  };

  deleteAll = async (): Promise<void> => {
    await this.resumeRepository.deleteAll();
  };
}

export default ResumeService;
