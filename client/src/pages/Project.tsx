import { Link, useParams } from "react-router-dom";
import {
  ClientInfo,
  DeleteProjectButton,
  EditProjectForm,
  ErrorAlert,
  Spinner,
} from "../components";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../Queries/projectQueries";
import { toReadableStatus } from "../helpers/statusReadable";
export default function Project() {
  const { id } = useParams();
  if (id === undefined) return <ErrorAlert message="something went wrong " />;
  const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
    variables: {
      id,
    },
  });
  if (loading) return <Spinner />;
  if (error) return <ErrorAlert message={error.message} />;
  if (!data) return <ErrorAlert message="No data" />;
  const { project }: any = data;
  
  
  return (
    <>
      <div className="mx-auto w-75 card p-5">
        <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
          Back
        </Link>
        <h1>{project.name}</h1>
        <p>{project.desciption}</p>
        <h5 className="mt-3">Project Status</h5>
        <h5 className="lead">{toReadableStatus(project.status)}</h5>
        {project.client && <ClientInfo client={project.client} />}
        <EditProjectForm project={project} />
        <DeleteProjectButton projectId={id} />
      </div>
    </>
  );
}
