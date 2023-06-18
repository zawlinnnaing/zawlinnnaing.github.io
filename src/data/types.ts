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

export interface IProject {
  logo: any;
  links: {
    text: string;
    url?: string;
  }[];
  name: string;
  technologies: {
    text: string;
    url: string;
  }[];
  detailConfig?: {
    isExternal: boolean;
    url: string;
  };
  summary: React.ReactNode;
}
