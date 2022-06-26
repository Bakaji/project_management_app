import { FaUser } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { ADD_PROJECT } from "../../Mutations/projectMutations";
import { GET_PROJECTS } from "../../Queries/projectQueries";
import { GET_CLIENTS } from "../../Queries/clientQueries";
import { ErrorAlert } from "../Error/Error";
import { Spinner } from "../Spinner/Spinner";
import { ClientType, ProjectType } from "../../types";

export function AddProjectModal() {
  const { data, loading, error } = useQuery(GET_CLIENTS);

  const [input, setInput] = useState<Partial<ProjectType>>({
    name: "",
    description: "",
    clientId: "",
  });
  const [addProjectMutation] = useMutation(ADD_PROJECT, {
    variables: {
      input,
    },
    update(cache, { data: { addProject } }) {
      const { allProjects }: any = cache.readQuery({
        query: GET_PROJECTS,
      });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          allProjects: [...allProjects, addProject],
        },
      });
    },
  });
  if (loading) return <Spinner />;
  if (error) return <ErrorAlert message={`cannot load ${error.message}`} />;
  if (data.allClients.length === 0)
    return <ErrorAlert message={`no user created yet`} />;
  const addProjectCallback = () => addProjectMutation();
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#AddProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Project</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="AddProjectModal"
        tabIndex={-1}
        aria-labelledby="AddProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AddProjectModalLabel">
                Add Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={input.name}
                      onChange={(e) =>
                        setInput({ ...input, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Desciption</label>
                    <input
                      type="email"
                      className="form-control"
                      value={input.description}
                      onChange={(e) =>
                        setInput({ ...input, description: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Client</label>
                    <select
                      className="form-control form-select"
                      defaultValue={data.allClients[0].id}
                      onChange={(e) =>
                        setInput({ ...input, clientId: e.target.value })
                      }
                      value={input.clientId}
                    >
                      {data.allClients?.map((c: ClientType, i: number) => (
                        <option key={i} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={addProjectCallback}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
