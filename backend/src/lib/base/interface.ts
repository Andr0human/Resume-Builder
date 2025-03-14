import { Types } from 'mongoose';

interface IBase {
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: Types.ObjectId;
  updatedBy?: Types.ObjectId;
}

export default IBase;
