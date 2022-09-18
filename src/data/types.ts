import { ITechnology } from "../utils/types";

export interface IExperience {
  id: string;
  companyName: string;
  url: string;
  role: string;
  employmentPeriod: {
    start: Date;
    end?: Date;
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
