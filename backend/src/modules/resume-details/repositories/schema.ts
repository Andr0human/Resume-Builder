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
    network: { type: String },
    username: { type: String },
    url: { type: String },
  },
  { _id: false }
);

const LocationSchema = new Schema<ILocation>(
  {
    address: { type: String, default: '' },
    postalCode: { type: String, default: '' },
    city: { type: String },
    countryCode: { type: String, default: '' },
    region: { type: String, default: '' },
  },
  { _id: false }
);

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String },
    level: { type: Number },
  },
  { _id: false }
);

const WorkSchema = new Schema<IWork>(
  {
    id: { type: String },
    name: { type: String },
    position: { type: String },
    url: { type: String, default: '' },
    startDate: { type: String },
    isWorkingHere: { type: Boolean },
    endDate: { type: String, default: null },
    highlights: { type: [String] },
    summary: { type: String },
    years: { type: String, default: '' },
  },
  { _id: false }
);

const EducationSchema = new Schema<IEducation>(
  {
    id: { type: String },
    institution: { type: String },
    url: { type: String },
    studyType: { type: String },
    area: { type: String },
    startDate: { type: String },
    isStudyingHere: { type: Boolean },
    endDate: { type: String, default: '' },
    score: { type: String },
    courses: { type: [String] },
  },
  { _id: false }
);

const ActivitiesSchema = new Schema<IActivities>(
  {
    involvements: { type: [String] },
    achievements: { type: [String] },
  },
  { _id: false }
);

const VolunteerSchema = new Schema<IVolunteer>(
  {
    id: { type: String },
    organization: { type: String },
    position: { type: String },
    url: { type: String },
    startDate: { type: String },
    endDate: { type: String, default: '' },
    summary: { type: String },
    highlights: { type: [String] },
    isVolunteeringNow: { type: Boolean },
  },
  { _id: false }
);

const AwardSchema = new Schema<IAward>(
  {
    id: { type: String },
    title: { type: String },
    date: { type: String },
    awarder: { type: String },
    summary: { type: String },
  },
  { _id: false }
);

const SkillsSchema = new Schema<ISkills>({
  languages: { type: [SkillSchema] },
  frameworks: { type: [SkillSchema] },
  technologies: { type: [SkillSchema] },
  libraries: { type: [SkillSchema] },
  databases: { type: [SkillSchema] },
  practices: { type: [SkillSchema] },
  tools: { type: [SkillSchema] },
});

const BasicsSchema = new Schema<IBasics>({
  name: { type: String },
  label: { type: String },
  email: { type: String },
  phone: { type: String },
  url: { type: String },
  summary: { type: String },
  location: { type: LocationSchema },
  relExp: { type: String },
  totalExp: { type: String },
  objective: { type: String },
  profiles: { type: [ProfileSchema] },
});

const ResumeSchema = new Schema<IResume>(
  {
    title: { type: String, required: true },
    basics: { type: BasicsSchema },
    skills: { type: SkillsSchema },
    work: { type: [WorkSchema] },
    education: { type: [EducationSchema] },
    activities: { type: ActivitiesSchema },
    volunteer: { type: [VolunteerSchema] },
    awards: { type: [AwardSchema] },
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

ResumeSchema.index({ createdBy: 1 });

export default ResumeSchema;
