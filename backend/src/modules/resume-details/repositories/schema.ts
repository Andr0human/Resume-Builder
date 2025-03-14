import { Schema } from 'mongoose';
import {
  IActivities,
  IAward,
  IBasics,
  IEducation,
  ILocation,
  IProfile,
  IResume,
  ISkill,
  ISkills,
  IVolunteer,
  IWork,
} from '../entities';

const ProfileSchema = new Schema<IProfile>(
  {
    network: { type: String, required: true },
    username: { type: String, required: true },
    url: { type: String, required: true },
  },
  { _id: false }
);

const LocationSchema = new Schema<ILocation>(
  {
    address: { type: String, default: '' },
    postalCode: { type: String, default: '' },
    city: { type: String, required: true },
    countryCode: { type: String, default: '' },
    region: { type: String, default: '' },
  },
  { _id: false }
);

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true },
    level: { type: Number, required: true },
  },
  { _id: false }
);

const WorkSchema = new Schema<IWork>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
    url: { type: String, default: '' },
    startDate: { type: String, required: true },
    isWorkingHere: { type: Boolean, required: true },
    endDate: { type: String, default: null },
    highlights: { type: [String], required: true },
    summary: { type: String, required: true },
    years: { type: String, default: '' },
  },
  { _id: false }
);

const EducationSchema = new Schema<IEducation>(
  {
    id: { type: String, required: true },
    institution: { type: String, required: true },
    url: { type: String, required: true },
    studyType: { type: String, required: true },
    area: { type: String, required: true },
    startDate: { type: String, required: true },
    isStudyingHere: { type: Boolean, required: true },
    endDate: { type: String, default: '' },
    score: { type: String, required: true },
    courses: { type: [String], required: true },
  },
  { _id: false }
);

const ActivitiesSchema = new Schema<IActivities>(
  {
    involvements: { type: [String], required: true },
    achievements: { type: [String], required: true },
  },
  { _id: false }
);

const VolunteerSchema = new Schema<IVolunteer>(
  {
    id: { type: String, required: true },
    organization: { type: String, required: true },
    position: { type: String, required: true },
    url: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, default: '' },
    summary: { type: String, required: true },
    highlights: { type: [String], required: true },
    isVolunteeringNow: { type: Boolean, required: true },
  },
  { _id: false }
);

const AwardSchema = new Schema<IAward>(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    awarder: { type: String, required: true },
    summary: { type: String, required: true },
  },
  { _id: false }
);

const SkillsSchema = new Schema<ISkills>({
  languages: { type: [SkillSchema], required: true },
  frameworks: { type: [SkillSchema], required: true },
  technologies: { type: [SkillSchema], required: true },
  libraries: { type: [SkillSchema], required: true },
  databases: { type: [SkillSchema], required: true },
  practices: { type: [SkillSchema], required: true },
  tools: { type: [SkillSchema], required: true },
});

const BasicsSchema = new Schema<IBasics>({
  name: { type: String, required: true },
  label: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true },
  location: { type: LocationSchema, required: true },
  relExp: { type: String, required: true },
  totalExp: { type: String, required: true },
  objective: { type: String, required: true },
  profiles: { type: [ProfileSchema], required: true },
});

const ResumeSchema = new Schema<IResume>(
  {
    title: { type: String, required: true },
    basics: { type: BasicsSchema, required: true },
    skills: { type: SkillsSchema, required: true },
    work: { type: [WorkSchema], required: true },
    education: { type: [EducationSchema], required: true },
    activities: { type: ActivitiesSchema, required: true },
    volunteer: { type: [VolunteerSchema], required: true },
    awards: { type: [AwardSchema], required: true },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

ResumeSchema.index({ createdBy: 1, title: 1 }, { unique: true });

export default ResumeSchema;
