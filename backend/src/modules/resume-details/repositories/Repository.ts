import { Types } from 'mongoose';
import { BaseRepository } from '../../../lib/base';

import { IResume } from '../entities';
import resumeModel from './model';

class ResumeRepository extends BaseRepository<IResume> {
  constructor() {
    super(resumeModel);
  }

  getAll = async (userId: string, fields: string): Promise<IResume[] | null> => {
    const result: IResume[] | null = await this.findAll(
      { createdBy: userId },
      'title',
      fields,
      0,
      0
    );
    return result;
  };

  create = async (user: IResume): Promise<IResume> => {
    const result: IResume = await this.createOne(user);
    return result;
  };

  update = async (id: string, newData: IResume): Promise<IResume | null> => {
    const result: IResume | null = await this.model.findByIdAndUpdate(
      id,
      { $set: newData },
      { new: true }
    );
    return result;
  };
}

export default ResumeRepository;
