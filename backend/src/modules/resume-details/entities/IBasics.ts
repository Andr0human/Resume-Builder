import ILocation from './ILocation';
import IProfile from './IProfile';

interface IBasics {
  name: string;
  label: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: ILocation;
  relExp: string;
  totalExp: string;
  objective: string;
  profiles: IProfile[];
}

export default IBasics;
