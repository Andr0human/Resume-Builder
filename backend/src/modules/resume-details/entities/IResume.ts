import { IBase } from '../../../lib/base';
import IActivities from './IActivites';
import IAward from './IAward';
import IBasics from './IBasics';
import IEducation from './IEducation';
import ISkills from './ISkills';
import IVolunteer from './IVolunteer';
import IWork from './IWork';

interface IResume extends IBase {
  title: string;
  basics?: IBasics;
  skills?: ISkills;
  work?: IWork[];
  education?: IEducation[];
  activities?: IActivities;
  volunteer?: IVolunteer[];
  awards?: IAward[];
}

export default IResume;
