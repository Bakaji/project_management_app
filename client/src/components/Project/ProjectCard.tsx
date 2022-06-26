import { Link } from "react-router-dom";
import { toReadableStatus } from "../../helpers/statusReadable";
import { ProjectType } from "../../types";

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>
            <Link to={`/projects/${project.id}`} className="btn btn-light">
              View
            </Link>
          </div>
          <p className="small">
            status: <strong>{toReadableStatus(project.status)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
