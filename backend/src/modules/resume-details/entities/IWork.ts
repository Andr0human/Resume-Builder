interface IWork {
  id?: string;
  name?: string;
  position?: string;
  url?: string;
  startDate?: string;
  isWorkingHere?: boolean;
  endDate?: string | null;
  highlights?: string[];
  summary?: string;
  years?: string;
}

export default IWork;
