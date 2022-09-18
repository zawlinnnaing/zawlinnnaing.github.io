import { ITechnology } from "../utils/types";

export interface IExperience {
  id: string;
  companyName: string;
  url: string;
  role: string;
  employmentPeriod: {
    start: string;
    end?: string;
    duration: string;
  };
  logo: {
    uri: string;
    isHorizontal?: boolean;
  };
  technologies: ITechnology[];
  summary?: React.ReactNode;
  companyUrl?: string;
}
