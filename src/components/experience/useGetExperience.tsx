import { last } from "lodash";
import experiences from "../../data/experiences";

export default function useGetExperience(location: Location) {
  const experienceId = last((location.pathname || "").split("/"));
  return experiences.find((experience) => experience.id === experienceId);
}
