interface IEducation {
  id: string;
  institution: string;
  url: string;
  studyType: string;
  area: string;
  startDate: string;
  isStudyingHere: boolean;
  endDate?: string;
  score: string;
  courses: string[];
}

export default IEducation;
