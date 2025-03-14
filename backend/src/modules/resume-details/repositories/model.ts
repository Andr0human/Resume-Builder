import { Model, model } from 'mongoose';
import { IResume } from '../entities';
import ResumeSchema from './schema';

const resumeModel: Model<IResume> = model<IResume>('Resume', ResumeSchema);

export default resumeModel;
