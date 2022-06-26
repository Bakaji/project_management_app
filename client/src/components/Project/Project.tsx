import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../Queries/projectQueries";
import { ProjectType } from "../../types";
import { ErrorAlert } from "../Error/Error";
import { Spinner } from "../Spinner/Spinner";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <ErrorAlert message={error.message} />;
  if (data.allProjects?.length === 0)
    return <ErrorAlert message={"No project created yet"} />;
  return (
    <div className="row  mt-4">
      {data.allProjects.map((p: ProjectType, i: number) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  );
}
