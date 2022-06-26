import { useMutation } from "@apollo/client";
import e from "cors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toReadableStatus } from "../../helpers/statusReadable";
import { EDIT_PROJECT } from "../../Mutations/projectMutations";
import { GET_PROJECTS } from "../../Queries/projectQueries";

export function EditProjectForm({ project }: { project: any }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: project.name ?? "",
    description: project.description ?? "",
    status: project.status,
  });
  const [editProject] = useMutation(EDIT_PROJECT, {
    variables: {
      input: {
        id: project.id,
        ...input,
      },
    },
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  const editProjectCallback = () => editProject();
  return (
    <>
      <h5 className="card-title mt-2">Edit informations</h5>
      <div className="card p-4 mt-2">
        <div className="form-group mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            value={input.name}
            onChange={(e) =>
              setInput({
                ...input,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={input.description}
            onChange={(e) =>
              setInput({
                ...input,
                description: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Status</label>
          <select
            title="status"
            className="form-control form-select"
            value={input.status}
            onChange={(e) =>
              setInput({
                ...input,
                status: e.target.value,
              })
            }
          >
            <option value="PLANNED">{toReadableStatus("PLANNED")}</option>
            <option value="IN_PROGRESS">
              {toReadableStatus("IN_PROGRESS")}
            </option>
            <option value="COMPLETED">{toReadableStatus("COMPLETED")}</option>
          </select>
        </div>
        <div className="form-group d-flex justify-content-end">
          <button className="btn btn-primary" onClick={editProjectCallback}>Save</button>
        </div>
      </div>
    </>
  );
}
