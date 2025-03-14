interface IVolunteer {
  id: string;
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
  isVolunteeringNow: boolean;
}

export default IVolunteer;
